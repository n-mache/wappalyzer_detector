# wappalyzer_detector
Wappalyzerを検知します。
## 使い方
まず、JavaScriptを読み込みます。
```
<script src="https://cdn.jsdelivr.net/gh/n-mache/wappalyzer_detector/detector.min.js"></script>
```
`check_wappalyzer`という名前の関数を実行すると検出結果が返ります。
```
window.addEventListener("load", function(){
    if (check_wappalyzer) alert("Wappalyzerを検知しました。");
}
```
[デモ](https://n-mache.work/wapl_detector.php)
