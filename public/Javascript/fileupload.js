FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio:150/150,
    imageResizeTargetWidth:5,
    imageResizeTargetHeight:5,

})

FilePond.parse(document.body);

