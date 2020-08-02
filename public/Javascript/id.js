document.getElementById('uploadImage').addEventListener('change', async function () {
    $("#results").empty();
    var files = this.files;
    let reader = await Dynamsoft.BarcodeReader.createInstance();
    let results = await reader.decode(files[0]);
    if (results.length == 0) {
        $("#results").append('No barcode detected!');
        return;
    }
    for(let result of results){
        console.log(result.barcodeText);
        
        
        var obj = JSON.parse(result.barcodeText);
        console.log(obj)
        document.querySelector('#childID').value = obj.ChildId
        document.querySelector('#password').value = obj.AadharID
    }
});