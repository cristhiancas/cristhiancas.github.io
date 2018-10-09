var wms_layers = [];
var format_AVANZAPERUPRESENCIA_0 = new ol.format.GeoJSON();
var features_AVANZAPERUPRESENCIA_0 = format_AVANZAPERUPRESENCIA_0.readFeatures(json_AVANZAPERUPRESENCIA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AVANZAPERUPRESENCIA_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AVANZAPERUPRESENCIA_0.addFeatures(features_AVANZAPERUPRESENCIA_0);var lyr_AVANZAPERUPRESENCIA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AVANZAPERUPRESENCIA_0, 
                style: style_AVANZAPERUPRESENCIA_0,
    title: 'AVANZA PERU PRESENCIA<br />\
    <img src="styles/legend/AVANZAPERUPRESENCIA_0_0.png" />  552.0000 - 4744.8000 <br />\
    <img src="styles/legend/AVANZAPERUPRESENCIA_0_1.png" />  4744.8000 - 8937.6000 <br />\
    <img src="styles/legend/AVANZAPERUPRESENCIA_0_2.png" />  8937.6000 - 13130.4000 <br />\
    <img src="styles/legend/AVANZAPERUPRESENCIA_0_3.png" />  13130.4000 - 17323.2000 <br />\
    <img src="styles/legend/AVANZAPERUPRESENCIA_0_4.png" />  17323.2000 - 21516.0000 <br />'
        });var format_OBRASPORLAMODERNIDADPRESENCIA_1 = new ol.format.GeoJSON();
var features_OBRASPORLAMODERNIDADPRESENCIA_1 = format_OBRASPORLAMODERNIDADPRESENCIA_1.readFeatures(json_OBRASPORLAMODERNIDADPRESENCIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBRASPORLAMODERNIDADPRESENCIA_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OBRASPORLAMODERNIDADPRESENCIA_1.addFeatures(features_OBRASPORLAMODERNIDADPRESENCIA_1);var lyr_OBRASPORLAMODERNIDADPRESENCIA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OBRASPORLAMODERNIDADPRESENCIA_1, 
                style: style_OBRASPORLAMODERNIDADPRESENCIA_1,
    title: 'OBRAS POR LA MODERNIDAD PRESENCIA<br />\
    <img src="styles/legend/OBRASPORLAMODERNIDADPRESENCIA_1_0.png" />  356.0000 - 3454.4000 <br />\
    <img src="styles/legend/OBRASPORLAMODERNIDADPRESENCIA_1_1.png" />  3454.4000 - 6552.8000 <br />\
    <img src="styles/legend/OBRASPORLAMODERNIDADPRESENCIA_1_2.png" />  6552.8000 - 9651.2000 <br />\
    <img src="styles/legend/OBRASPORLAMODERNIDADPRESENCIA_1_3.png" />  9651.2000 - 12749.6000 <br />\
    <img src="styles/legend/OBRASPORLAMODERNIDADPRESENCIA_1_4.png" />  12749.6000 - 15848.0000 <br />'
        });var format_DISTICA_2 = new ol.format.GeoJSON();
var features_DISTICA_2 = format_DISTICA_2.readFeatures(json_DISTICA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTICA_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DISTICA_2.addFeatures(features_DISTICA_2);var lyr_DISTICA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTICA_2, 
                style: style_DISTICA_2,
    title: 'DISTICA<br />\
    <img src="styles/legend/DISTICA_2_0.png" /> ICA<br />\
    <img src="styles/legend/DISTICA_2_1.png" /> LA TINGUIÑA<br />\
    <img src="styles/legend/DISTICA_2_2.png" /> LOS AQUIJES<br />\
    <img src="styles/legend/DISTICA_2_3.png" /> OCUCAJE<br />\
    <img src="styles/legend/DISTICA_2_4.png" /> PACHACUTEC<br />\
    <img src="styles/legend/DISTICA_2_5.png" /> PARCONA<br />\
    <img src="styles/legend/DISTICA_2_6.png" /> PUEBLO NUEVO<br />\
    <img src="styles/legend/DISTICA_2_7.png" /> SALAS<br />\
    <img src="styles/legend/DISTICA_2_8.png" /> SAN JOSE DE LOS MOLINOS<br />\
    <img src="styles/legend/DISTICA_2_9.png" /> SAN JUAN BAUTISTA<br />\
    <img src="styles/legend/DISTICA_2_10.png" /> SANTIAGO<br />\
    <img src="styles/legend/DISTICA_2_11.png" /> SUBTANJALLA<br />\
    <img src="styles/legend/DISTICA_2_12.png" /> TATE<br />\
    <img src="styles/legend/DISTICA_2_13.png" /> YAUCA DEL ROSARIO<br />'
        });

lyr_OBRASPORLAMODERNIDADPRESENCIA_1.setVisible(true);lyr_DISTICA_2.setVisible(true);
var layersList = [lyr_AVANZAPERUPRESENCIA_0,lyr_OBRASPORLAMODERNIDADPRESENCIA_1,lyr_DISTICA_2];
lyr_AVANZAPERUPRESENCIA_0.set('fieldAliases', {'NOMBPROV': 'NOMBPROV', 'NOMBDIST': 'NOMBDIST', 'OPM': 'OPM', 'AP': 'AP', });
lyr_OBRASPORLAMODERNIDADPRESENCIA_1.set('fieldAliases', {'NOMBPROV': 'NOMBPROV', 'NOMBDIST': 'NOMBDIST', 'OPM': 'OPM', 'AP': 'AP', });
lyr_DISTICA_2.set('fieldAliases', {'NOMBPROV': 'NOMBPROV', 'NOMBDIST': 'NOMBDIST', 'OPM': 'OPM', 'AP': 'AP', });
lyr_AVANZAPERUPRESENCIA_0.set('fieldImages', {'NOMBPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'OPM': 'TextEdit', 'AP': 'TextEdit', });
lyr_OBRASPORLAMODERNIDADPRESENCIA_1.set('fieldImages', {'NOMBPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'OPM': 'TextEdit', 'AP': 'TextEdit', });
lyr_DISTICA_2.set('fieldImages', {'NOMBPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'OPM': 'TextEdit', 'AP': 'TextEdit', });
lyr_AVANZAPERUPRESENCIA_0.set('fieldLabels', {'NOMBPROV': 'no label', 'NOMBDIST': 'no label', 'OPM': 'header label', 'AP': 'header label', });
lyr_OBRASPORLAMODERNIDADPRESENCIA_1.set('fieldLabels', {'NOMBPROV': 'no label', 'NOMBDIST': 'no label', 'OPM': 'header label', 'AP': 'header label', });
lyr_DISTICA_2.set('fieldLabels', {'NOMBPROV': 'no label', 'NOMBDIST': 'no label', 'OPM': 'header label', 'AP': 'header label', });
lyr_DISTICA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});