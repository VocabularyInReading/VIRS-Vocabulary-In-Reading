Attribute VB_Name = "Main_Module"
Option Explicit

' Main procedure
Public Sub Update()


    
    Const FIRST_ROW_DATA = 2
    Const UPDATE_SHEET_NAME = "Update"
    Const SQL_PATH_RANGE_NAME = "sql_path"
    
    Dim updateSheet As Worksheet
    Dim finalWords As New Dictionary
    Dim duplicateWords As New Dictionary
    Dim lastRow As Long
    
    On Error GoTo Error_Handler
    
    ' Turn off screen updating
    ScreenOff
    
    Set updateSheet = ThisWorkbook.Sheets(UPDATE_SHEET_NAME)
    If updateSheet Is Nothing Then
        Debug.Print "error"
    End If
    
    With updateSheet
        lastRow = .Cells(.Rows.count, 1).End(xlUp).Row
        
        Dim i As Long
        For i = FIRST_ROW_DATA To lastRow
                
            Dim filePath As String
            Dim Category As String
            Dim Words As Dictionary
            
            filePath = ThisWorkbook.path & .Cells(i, 1).value
            Category = .Cells(i, 2).value
            GetWords filePath, Category, finalWords, duplicateWords
            
            .Cells(i, 3).value = GetCategoryCount(finalWords, Category)
            
        Next
    End With
    
    ' Save finalWords and write to the duplicates sheet.
    WriteToFile ThisWorkbook.path & updateSheet.Range(SQL_PATH_RANGE_NAME).value, finalWords
    WriteDuplicates duplicateWords
      
Exit_Handler:
    On Error GoTo 0
    
    ' Turn on screen updating
    ScreenOn
    
    Set updateSheet = Nothing
    Set finalWords = Nothing
    Set duplicateWords = Nothing
    
    Exit Sub
Error_Handler:
    MsgBox "Error " & Err.Number & " (" & Err.Description & "), vbCritical"
    Resume Exit_Handler
End Sub

' Write the duplicate words to the duplicates sheet
Private Sub WriteDuplicates(ByRef duplicateWords As Dictionary)
    Dim duplicatesSheet As Worksheet
    Dim word As New word
    Set duplicatesSheet = ThisWorkbook.Sheets("Duplicates")
    
    duplicatesSheet.Cells.Clear
    Dim i As Long
    For i = 0 To duplicateWords.count - 1
        Set word = duplicateWords.Items(i)
        If Not word Is Nothing Then
            duplicatesSheet.Cells(i + 1, 1).value = word.value
            duplicatesSheet.Cells(i + 1, 2).value = word.Category
        End If
    Next
End Sub

' Count by category
Private Function GetCategoryCount(ByRef Words As Dictionary, Category As String) As Long
    
    Dim word As Variant
    Dim count As Long
    
    For Each word In Words.Items
        If word.Category = Category Then
            count = count + 1
        End If
    Next word
    
    GetCategoryCount = count
End Function


' Function to collect all the words from each workbook
Private Sub GetWords(ByVal filePath As String, ByVal Category As String, ByRef Words As Dictionary, ByRef duplicateWords As Dictionary)
    
    ' Get the data
    Dim DataWorkbook As Workbook
    Dim DataSheet As Worksheet
    Dim DataRange As Range
    Dim w As word
    
    On Error GoTo Error_Handler
    
    Set DataWorkbook = Workbooks.Open(filePath, False, True)
    Set DataSheet = DataWorkbook.Sheets(1)
    Set DataRange = DataSheet.UsedRange
    
    ' Collect the data
    Dim Values As Variant
    Dim v As Variant
    Dim value As String
    
    Values = DataRange.Value2
    For Each v In Values
        If Not IsNumeric(v) Then
            
            value = Trim$(CStr(Application.WorksheetFunction.Clean(v)))
            If Not Words.Exists(value) Then
                Set w = New word
                w.Category = Category
                w.value = value
                Words.Add value, w
            Else
                If duplicateWords.Exists(value) Then
                    Set w = New word
                    w.Category = Category
                    w.value = value
                    duplicateWords.Add value, w
                End If
            End If
        End If
    Next v

Exit_Handler:
    On Error GoTo 0
    DataWorkbook.Close False
Exit Sub
Error_Handler:
    MsgBox "Error " & Err.Number & " (" & Err.Description & "), vbCritical"
    Resume Exit_Handler
End Sub

Private Sub WriteToFile(path As String, Data As Dictionary)
    
    Const TRUNCATE As String = "TRUNCATE `vir`.`word`;"
    Const ACTION As String = "INSERT INTO `vir`.`word` "
    Const HEADERS As String = "(`value`, `category`) "
    Const Values As String = "VALUES "
    
    Dim word As Variant
    Dim finalString As String
    
    finalString = GetString(Data)
    
    ' Remove the last two characters from the string
    finalString = Left$(finalString, Len(finalString) - 2)
    
    Open path For Output As #1
    Print #1, TRUNCATE
    Print #1, ACTION
    Print #1, HEADERS
    Print #1, Values
    Print #1, finalString
    Close #1
    
    
End Sub

Private Function GetString(Data As Dictionary) As String
    Dim word As Variant
    Dim finalString As String
    Dim strCat As New StringConcat
    
    strCat.setInitialAllocSize 700000
    For Each word In Data.Items
        strCat.Add word.PrintForSql
        strCat.Add ", "
    Next word
    
    GetString = strCat.GetStr
    
End Function
