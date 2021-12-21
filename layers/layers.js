var wms_layers = [];

var format_Supervised_0 = new ol.format.GeoJSON();
var features_Supervised_0 = format_Supervised_0.readFeatures(json_Supervised_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supervised_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supervised_0.addFeatures(features_Supervised_0);
var lyr_Supervised_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Supervised_0, 
                style: style_Supervised_0,
                interactive: true,
    title: 'Supervised<br />\
    <img src="styles/legend/Supervised_0_0.png" /> Water Body<br />\
    <img src="styles/legend/Supervised_0_1.png" /> Vegetasi Kanopi<br />\
    <img src="styles/legend/Supervised_0_2.png" /> Permukiman<br />\
    <img src="styles/legend/Supervised_0_3.png" /> Industri<br />'
        });

lyr_Supervised_0.setVisible(true);
var layersList = [lyr_Supervised_0];
lyr_Supervised_0.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Supervised_0.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Supervised_0.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Supervised_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});