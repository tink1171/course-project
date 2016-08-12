'use strict';

/* Controllers */

siteApp.controller('CreateSiteCtrl', ['$scope','$http', function( $scope, $http) {
    var page = {};

    make_dialog();
    make_drag_and_drop(page);

    $( function() {
        $( ".radio" ).checkboxradio({
            icon: false
        });
    } );

    $scope.theme = "default";
    $scope.change_theme = function change_theme(theme) {
        $scope.theme = theme;
    };

    $scope.type_of_cell_1 = "box";
    $scope.type_of_cell_2 = "box";
    $scope.type_of_cell_3 = "box";
    $scope.type_of_cell_4 = "box";
    $scope.change_template = function change_template(type1,type2,type3,type4) {
        $scope.type_of_cell_1 = type1;
        $scope.type_of_cell_2 = type2;
        $scope.type_of_cell_3 = type3;
        $scope.type_of_cell_4 = type4;

    };

    $scope.save = function () {
        var dataObj = {
            name : "vvv",
            employees : 75,
            headoffice : "3333"
        };
        var res = $http.post('/savecompany_json', "dsds");
        res.success(function(data, status, headers, config) {
            $scope.message = data;
        });
        res.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    }

}]);

function make_drag_and_drop(page) {
    $('div.draggable').draggable({
        revert:true,
        helper: "clone"

    });
    $('.droppable').droppable({
        drop: function(event , ui) {
            var dragg_id = ui.draggable.attr("id");
            var box_id = this;
            if(dragg_id == "dragg1") {add_text(box_id,page);}
            if(dragg_id == "dragg2") {add_image(box_id,page);}
            if(dragg_id == "dragg3") {add_Youtube(box_id,page);}
        },
        over: function() {
            $(this).css({
                border: "medium double blue"
            });
        }

    });

}

function make_dialog() {
    $('#dialog_Youtube').dialog({
        autoOpen: false,
        modal: true
    });
    $('#dialog_text').dialog({
        autoOpen: false,
        modal: true
    });
}

function add_Youtube(box_id,page) {
    $('#dialog_Youtube').dialog("open").dialog({
        buttons: [{
            text: "OK", click: function () {
                var youtube_link = $("#link").val();
                $(box_id).append('<iframe width="100%" height="100%" src=' + youtube_link + ' frameborder="0" allowfullscreen></iframe>');
                $(this).dialog("close");
            }
        }]
    });
}

function add_text(box_id,page) {
    tinymce.init({
        selector: '#mytextarea'
    });
    $('#dialog_text').dialog("open").dialog({
        buttons: [{
            text: "OK", click: function () {
                var text = tinymce.get('mytextarea').getContent();
                $(box_id).append(text);
                $(this).dialog("close");
            }
        }]
    });
}

function add_image(box_id,page) {
    cloudinary.openUploadWidget({ cloud_name: 'dgyxvzoad',
            upload_preset: 'xpdfeyzq', theme : 'minimal'},
        function(error, result) {
            $(box_id).append("<img style=\"width:100%; height:100%;\" src=\"" +
                result[0].secure_url + "\"/>");
        });
}


