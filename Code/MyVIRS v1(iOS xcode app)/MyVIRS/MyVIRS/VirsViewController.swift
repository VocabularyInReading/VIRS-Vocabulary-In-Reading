//
//  ViewController.swift
//  MyVIRS
//
//  Created by Javier Duenas on 4/3/21.
//

import UIKit
import WebKit

class VirsViewController: UIViewController, WKNavigationDelegate {
    
    var webView: WKWebView!
    //let url = URL(string: "http://myvirs.com/dashboard")
    
//    var webView: WKWebView!
    
    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

//        myWebView = WKWebView(frame: .zero, configuration: webConfiguration)
//
//        myWebView.uiDelegate = self
//        view = myWebView
//
      let myURL = URL(string: "https:/www.google.com")!
        webView.load(URLRequest(url: myURL))
        webView.allowsBackForwardNavigationGestures = true
//        let myRequest = URLRequest(url: myURL!)
//        myWebView.load(myRequest)
        
        
    }

 
    
}
