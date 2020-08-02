document.getElementById('uploadImage').addEventListener('change', async function () {
    $("#results").empty();
    var files = this.files;
    let reader = await Dynamsoft.BarcodeReader.createInstance();
    let results = await reader.decode(files[0]);
    if (results.length == 0) {
        $("#results").append('No barcode detected!');
        return;
    }
    for (let result of results) {
        console.log(result.barcodeText);
        try {
            xmlDoc = $.parseXML(result.barcodeText),

                $(xmlDoc).each(function (i, obj) {
                    console.log(i);
                    console.log(obj.documentElement.nodeName);

                    $data = $(xmlDoc).find(obj.documentElement.nodeName);
                    $data.each(function () {



                              document.querySelector('#aadharID').value = this.attributes.uid.value
                              document.querySelector('#Address').value = this.attributes.loc.value
                              document.querySelector('#Gname').value = this.attributes.co.value
                              document.querySelector('#city').value = this.attributes.dist.value 
                              document.querySelector('#state').value = this.attributes.state.value
                              //document.querySelector('#pin').value = this.attributes.pc.value
                             

                        $.each(this.attributes, function (i, attrib) {
                            var name = attrib.name;
                            var value = attrib.value;

                            console.log(name);
                            console.log(value);

                            info = '<div>' + name + ': ' + value + '</div>';
                            $("#results").append(info);
                        });
                    });
                });
        } catch (error) {
            $("#results").append(error.message);
        }
    }
});