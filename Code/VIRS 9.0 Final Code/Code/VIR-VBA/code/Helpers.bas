Attribute VB_Name = "Helpers"
Option Explicit
Option Private Module

Public Sub ScreenOff()
    With Application
        .ScreenUpdating = False
        .EnableEvents = False
    End With
End Sub

Public Sub ScreenOn()
    With Application
        .ScreenUpdating = True
        .EnableEvents = True
    End With
PerfMonProcEnd "VBAProject.Helpers.ScreenOn"
End Sub
