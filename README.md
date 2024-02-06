# wappalyzer_detector
Wappalyzerを検知します。
## 使い方
まず、JavaScriptを読み込みます。
```
<script src="https://cdn.jsdelivr.net/gh/n-mache/wappalyzer_detector/detector.min.js"></script>
```
検知されたときに`on_wapl_detected`という名前の関数が実行されます。
```
function on_wapl_detected(){
    alert("Wappalyzerを検知しました。");
}
```
みたいなjsを書いておけば検知されたときアラートを表示させれます。<br>
[デモ](https://n-mache.work/wapl_detector.php)
