//
//  ViewController.swift
//  VIR-iPhone
//
//  Created by Alfredo Lopez on 10/1/17.
//  Copyright © 2017 Vocabulary In Reading Strategy. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKUIDelegate {
    
    let URL_STRING = "http://www.myvirs.com"
    var webView: WKWebView!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupWebView()
        
        let url = URL(string: URL_STRING)
        let request = URLRequest(url: url!)
        webView.load(request)
        webView.allowsBackForwardNavigationGestures = true
        webView.allowsLinkPreview = true
    }
    
    private func setupWebView() {
        let webConfiguration = WKWebViewConfiguration()
        
        webView = WKWebView(frame:.zero , configuration: webConfiguration)
        webView.uiDelegate = self
        view.addSubview(webView)
        webView.translatesAutoresizingMaskIntoConstraints = false
        view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "H:|[v0]|", options: NSLayoutFormatOptions(), metrics: nil, views: ["v0":webView]))
        view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "V:|-20-[v0]|", options: NSLayoutFormatOptions(), metrics: nil, views: ["v0":webView]))
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

