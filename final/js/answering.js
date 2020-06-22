$(document).ready(function () {
    var q = 1;
    var questions = 10;
    $('#A').click(function () {
        if (q <= questions) {
            $('#starttext').empty();
            if (q != 1 && Number($('#answercode').text()) == 1) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
            };
            $('#questext').empty();
            $('#questext').load('./questions/question' + q.toString() + '.xml');
            q++;
        } else {
            if (q == questions + 1) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                q++;
            };
            $('#questext').empty();
            $('#starttext').html(function () {
                if ($('#whiteboard').text() <= 30) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你可能要重新回去讀高中了，慢走不送</h5>'
                } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，你可能志不在地科</h5>'
                } else if ($('#whiteboard').text() > 70) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你這種人才不該被埋沒於此啊</h5>'
                }
                        });
            $('#whiteboard').css('visibility', 'hidden')
        }
    });

    $('#B').click(function () {
        if (q <= questions) {
            $('#starttext').empty();
            if (q != 1 && Number($('#answercode').text()) == 2) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
            };
            $('#questext').empty();
            $('#questext').load('./questions/question' + q.toString() + '.xml');
            q++;
        } else {
            if (q == questions + 1) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                q++;
            };
            $('#questext').empty();
            $('#starttext').html(function () {
                if ($('#whiteboard').text() <= 30) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你可能要重新回去讀高中了，慢走不送</h5>'
                } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，你可能志不在地科</h5>'
                } else if ($('#whiteboard').text() > 70) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你這種人才不該被埋沒於此啊</h5>'
                }
                        });
            $('#whiteboard').css('visibility', 'hidden')
        }
    });

    $('#C').click(function () {
        if (q <= questions) {
            $('#starttext').empty();
            if (q != 1 && Number($('#answercode').text()) == 3) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                q++;
            };
            $('#questext').empty();
            $('#questext').load('./questions/question' + q.toString() + '.xml');
            q++;
        } else {
            if (q == questions + 1) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
            };
            $('#questext').empty();
            $('#starttext').html(function () {
                if ($('#whiteboard').text() <= 30) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你可能要重新回去讀高中了，慢走不送</h5>'
                } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，你可能志不在地科</h5>'
                } else if ($('#whiteboard').text() > 70) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你這種人才不該被埋沒於此啊</h5>'
                }
                        });
            $('#whiteboard').css('visibility', 'hidden')
        }
    });

    $('#D').click(function () {
        if (q <= questions) {
            $('#starttext').empty();
            if (q != 1 && Number($('#answercode').text()) == 4) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                q++;
            };
            $('#questext').empty();
            $('#questext').load('./questions/question' + q.toString() + '.xml');
            q++;
        } else {
            if (q == questions + 1) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
            };
            $('#questext').empty();
            $('#starttext').html(function () {
                if ($('#whiteboard').text() <= 30) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你可能要重新回去讀高中了，慢走不送</h5>'
                } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，你可能志不在地科</h5>'
                } else if ($('#whiteboard').text() > 70) {
                    return  '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你這種人才不該被埋沒於此啊</h5>'
                }
                        });
            $('#whiteboard').css('visibility', 'hidden')
        }
    });
})