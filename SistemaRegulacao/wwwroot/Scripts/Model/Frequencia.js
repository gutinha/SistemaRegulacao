
function Alteracao() {
    $('#filtro1').addClass("hide");
    $('#filtro2').removeClass("hide");
}

(function ($) {

    $(function () {
        //$('#salvar').click(function () { postarFrequencia(); });
        atualizartotal();
        $('.btntooltip').tooltip();

        //$('.frequencia tbody tr:even td').css({ "background-color": "#ccc" });
        if (desbolqueado) {
            $(".selFreq").click(function (event) {
                
                Alteracao();
                var target = $(event.target);
                target = (target.attr('id') == undefined) ? target.parent("a") : target;
                if ($("#checkMultiplaMarcacao").is(':checked')) {
                    
                    var ra = target.attr('id').split('_');
                    var trclass = target.parents("td").attr('class').split(" ")[0];
                    $("." + trclass).children("a.class_a_" + ra[2]).html(getTextFrequencia());
                    $("." + trclass).children("input.class_h_" + ra[2]).val($('input[name=optionsRadios]:radio:checked').val());
                }
                else {
                    target.html(getTextFrequencia());
                    target.parents("td").children("input").val($('<div/>').html($('input[name=optionsRadios]:radio:checked').val()).text());
                }

                atualizartotal();
            });

            $(".colTitleFreq").click(function (event) {
                Alteracao();
                var target = $(event.target);
                $(".col_item_" + target.prop('id')).children("a").each(function () {
                    //alert($(this).children("i"));
                    if (!($(this).text() == "F" || $(this).children("i").get(0) != null) || $('input[name=optionsRadios]:radio:checked').attr("id") == "optionsRadios3") {
                        $(this).html(getTextFrequencia());
                    }
                });
                $(".col_item_" + target.prop('id')).children("input").each(function () {

                    if ((!($(this).val() == "F" || $(this).val() == ".") || $('input[name=optionsRadios]:radio:checked').attr("id") == "optionsRadios3")) {
                        $(this).val($('<div/>').html($('input[name=optionsRadios]:radio:checked').val()).text());
                    }
                });

                atualizartotal();
            });
        }


        $("#visualizacao").change(function () {
            var str = "";
            $("#visualizacao option:selected").each(function () {

                if ($(this).val() != 0) {
                    var colunas = $(".colTitleFreq");
                    $('.frequencia > tbody > tr > td').css({ "font-size": "12px" });
                    $('.frequencia > thead > tr > th a').css({ "font-size": "12px" });
                    $('.frequencia > thead > tr > th').css({ "font-size": "12px" });
                    $('.frequencia > thead > tr > td.colAula').css({ "font-size": "12px" });
                    paginar(0, $(this).val());
                }
                else {
                    var colunas = $(".colTitleFreq");
                    $('.frequencia > tbody > tr > td').css({ "font-size": "9px" });
                    $('.frequencia > thead > tr > th').css({ "font-size": "7px" });
                    $('.frequencia > thead > tr > th a').css({ "font-size": "7px" });
                    $('.frequencia > thead > tr > td.colAula').css({ "font-size": "7px" });
                    $('.frequencia > tbody > tr > th.frequenciaLeft').css({ "font-size": "10px" });
                    $('.frequencia > tbody > tr > td.frequenciaLeft').css({ "font-size": "10px" });

                    paginar(0, colunas.length);
                }
            });
        }).change();

        $('#DataInicial, #DataFinal').datepicker({
            format: "dd/mm/yyyy",
            language: 'pt-BR'
        });
    });
})(jQuery);

function getTextFrequencia() {
    if ($('input[name=optionsRadios]:radio:checked').val() == ".") {
        return "<i class='fa fa-circle' style='font-size: 4px; '></i>"
    }
    return $('input[name=optionsRadios]:radio:checked').val();
}

function paginacao(pagina) {
    inicio = ((pagina * parseInt($("#visualizacao").val())) + parseInt($("#page").val()));
    fim = (inicio + parseInt($("#visualizacao").val()));
    paginar(inicio, fim);
}

function paginar(inicio, fim) {
    var colunas = $(".colTitleFreq");
    if (inicio > colunas.length || inicio < 0) return false;

    $("#page").val(inicio);
    for (i = 0; i < colunas.length; i++) {
        if (i >= inicio && i < fim) {
            $(colunas[i]).parents("th").removeClass("hide");
            $(".col_item_" + $(colunas[i]).prop('id')).removeClass("hide");
            $(".col_aula_" + $(colunas[i]).prop('id')).removeClass("hide");

            $(colunas[i]).parents("th").removeClass("visible-xs");
            $(".col_item_" + $(colunas[i]).prop('id')).removeClass("visible-xs");
            $(".col_aula_" + $(colunas[i]).prop('id')).removeClass("visible-xs");
        }
        else {
            $(colunas[i]).parents("th").addClass("hide");
            $(".col_item_" + $(colunas[i]).prop('id')).addClass("hide");
            $(".col_aula_" + $(colunas[i]).prop('id')).addClass("hide");
        }
    }
    $(".visibletable").each(function () {
        if ($(this).hasClass("hide")) {
            $(this).addClass("visible-xs");
        }
    });


    $(".proximo").removeClass("disabled");
    $(".anterior").removeClass("disabled");
    if (inicio == 0) { $(".anterior").addClass("disabled"); }
    if (fim >= colunas.length) { $(".proximo").addClass("disabled"); }

    if (colunas.length <= (fim - inicio)) { $(".pagination").hide(); }
    else { $(".pagination").show(); }
}

function atualizartotal() {
    $(".frequencia tr .totalfrequencia ").each(function () {
        $(this).children("span").html($(".class_h_" + $(this).children("input").val() + "[value=F]").length);
    });
}

function postarFrequencia() {
    var retornometodo = false;
    $("#progressconteudo").html("Salvando Frequência...");
    $(".progress-bar").css("width", "10%");
    alert($('#bodyFrequencia').children().length);

    //for (var i = 0; i < $('#bodyFrequencia').children().length ; i++) {
    //    $.ajax({
    //        type: 'POST',
    //        url: urlfrequencia,
    //        success: function (data) {
    //            //$("#planoAulaMensagem").removeClass("alert-warning").removeClass("alert-error");
    //            //$("#planoAulaMensagem").addClass("alert-success");
    //            //$("#planoAulaMensagem").show().fadeIn(800);
    //            //$("#planoAulaMensagem").html("<b>Sucesso!</b> Plano de aula atualizado!");
    //            alert("enviou...");
    //        },
    //        error: function (textStatus, errorThrown) {
    //            //$("#planoAulaMensagem").removeClass("alert-warning").removeClass("alert-success");
    //            //$("#planoAulaMensagem").addClass("alert-error");
    //            //$("#planoAulaMensagem").show().fadeIn(800);
    //            //$("#planoAulaMensagem").html("<b>Erro!</b> Erro ao atualizar os dados de plano de aula para essa disciplina. Favor reportar o erro ao Departamento de TI");
    //            alert("Deu pau...");
    //        },
    //        async: false
    //    });

    //    $(".progress-bar").css("width", "25%");
    //}


    
    return retornometodo;
}

