$(document).ready(function () {
    var q = 1;
    var questions = 10;
    var difficulty
    $('#senior').click(function () {
        difficulty = 'easy'
        $('#starttext').empty();
        $('#starttext').css('display', 'none')
        $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
        q++
    });
    $('#bachelor').click(function () {
        difficulty = 'hard'
        $('#starttext').empty();
        $('#starttext').css('display', 'none')
        $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
        q++
    });

    $('#A').click(function () {
        if (q <= questions) {
            if (q != 1 && Number($('#answercode').text()) == 1) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/bingo.png" alt="bingo">' +
                    '<div class="correcting">不錯，答對了</div>'
                );
                $('.correcting').css('color', 'black');
                $('.correcting').css('background-color','#10ff00');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            } else if (q != 1 && Number($('#answercode').text()) != 1) {
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            };
            $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
            if (q > 1) {
                q++;
            }
        } else {
            if (q == questions + 1 && Number($('#answercode').text()) == 1) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/bingo.png" alt="bingo">' +
                    '<div class="correcting">不錯，答對了</div>'
                );
                $('.correcting').css('color', 'black');
                $('.correcting').css('background-color','#10ff00');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                q++;
            } else if (q == questions + 1 && Number($('#answercode').text()) != 1) {
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            };
            $('#questext').empty();
            $('#endtext').html(function () {
                if (difficulty == 'easy') {
                    if ($('#whiteboard').text() <= 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你可能要重新回去讀高中了，慢走不送</h5>'
                    } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，你可能志不在地科</h5>'
                    } else if ($('#whiteboard').text() > 70) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你這種人才不該被埋沒於此啊</h5>'
                    }
                    ;
                } else {
                    if ($('#whiteboard').text() <= 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，此處不容君，必有他處容君</h5>'
                    } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">什麼時候簽博啊 (x)</h5>'
                    } else if ($('#whiteboard').text() > 70) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你是教授無誤吧</h5>'
                    }
                    ;
                }
                ;
            });
            $('#endtext').fadeIn();
            $('#whiteboard').css('visibility', 'hidden')
        }
    });

    $('#B').click(function () {
        if (q <= questions) {
            if (q != 1 && Number($('#answercode').text()) == 2) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/bingo.png" alt="bingo">' +
                    '<div class="correcting">不錯，答對了</div>'
                );
                $('.correcting').css('color', 'black');
                $('.correcting').css('background-color','#10ff00');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            } else if (q != 1 && Number($('#answercode').text()) != 2) {
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            }
            ;
            $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
            if (q > 1) {
                q++;
            }
        } else {
            if (q == questions + 1 && Number($('#answercode').text()) == 2) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/bingo.png" alt="bingo">' +
                    '<div class="correcting">不錯，答對了</div>'
                );
                $('.correcting').css('color', 'black');
                $('.correcting').css('background-color','#10ff00');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                q++;
            } else if (q == questions + 1 && Number($('#answercode').text()) != 2) {
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            };
            $('#questext').empty();
            $('#endtext').html(function () {
                if (difficulty == 'easy') {
                    if ($('#whiteboard').text() <= 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你可能要重新回去讀高中了，慢走不送</h5>'
                    } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，你可能志不在地科</h5>'
                    } else if ($('#whiteboard').text() > 70) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你這種人才不該被埋沒於此啊</h5>'
                    }
                    ;
                } else {
                    if ($('#whiteboard').text() <= 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，此處不容君，必有他處容君</h5>'
                    } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">什麼時候簽博啊 (x)</h5>'
                    } else if ($('#whiteboard').text() > 70) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你是教授無誤吧</h5>'
                    }
                    ;
                }
                ;
            });
            $('#endtext').fadeIn();
            $('#whiteboard').css('visibility', 'hidden')
        }
    });

    $('#C').click(function () {
        if (q <= questions) {
            if (q != 1 && Number($('#answercode').text()) == 3) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/bingo.png" alt="bingo">' +
                    '<div class="correcting">不錯，答對了</div>'
                );
                $('.correcting').css('color', 'black');
                $('.correcting').css('background-color','#10ff00')
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            } else if (q != 1 && Number($('#answercode').text()) != 3) {
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            }
            ;
            $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
            if (q > 1) {
                q++;
            };
        } else {
            if (q == questions + 1 && Number($('#answercode').text()) == 3) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/bingo.png" alt="bingo">' +
                    '<div class="correcting">不錯，答對了</div>'
                );
                $('.correcting').css('color', 'black');
                $('.correcting').css('background-color','#10ff00');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                q++;
            } else if (q == questions + 1 && Number($('#answercode').text()) != 3) {
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            };
            $('#questext').empty();
            $('#endtext').html(function () {
                if (difficulty == 'easy') {
                    if ($('#whiteboard').text() <= 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你可能要重新回去讀高中了，慢走不送</h5>'
                    } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，你可能志不在地科</h5>'
                    } else if ($('#whiteboard').text() > 70) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你這種人才不該被埋沒於此啊</h5>'
                    };
                } else {
                    if ($('#whiteboard').text() <= 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，此處不容君，必有他處容君</h5>'
                    } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">什麼時候簽博啊 (x)</h5>'
                    } else if ($('#whiteboard').text() > 70) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你是教授無誤吧</h5>'
                    };
                };
            });
            $('#endtext').fadeIn();
            $('#whiteboard').css('visibility', 'hidden')
        }
    });

    $('#D').click(function () {
        if (q <= questions) {
            if (q != 1 && Number($('#answercode').text()) == 4) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/bingo.png" alt="bingo">' +
                    '<div class="correcting">不錯，答對了</div>'
                );
                $('.correcting').css('color', 'black');
                $('.correcting').css('background-color','#10ff00')
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            } else if (q != 1 && Number($('#answercode').text()) != 4) {
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            };
            $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
            if (q > 1) {
                q++;
            };
        } else {
            if (q == questions + 1 && Number($('#answercode').text()) == 4) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/bingo.png" alt="bingo">' +
                    '<div class="correcting">不錯，答對了</div>'
                );
                $('.correcting').css('color', 'black');
                $('.correcting').css('background-color','#10ff00');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                q++;
            } else if (q == questions + 1 && Number($('#answercode').text()) != 4) {
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
            };
            $('#questext').empty();
            $('#endtext').html(function () {
                if (difficulty == 'easy') {
                    if ($('#whiteboard').text() <= 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你可能要重新回去讀高中了，慢走不送</h5>'
                    } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，你可能志不在地科</h5>'
                    } else if ($('#whiteboard').text() > 70) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你這種人才不該被埋沒於此啊</h5>'
                    };
                } else {
                    if ($('#whiteboard').text() <= 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">沒關係，此處不容君，必有他處容君</h5>'
                    } else if ($('#whiteboard').text() <= 70 && $('#whiteboard').text() > 30) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">什麼時候簽博啊 (x)</h5>'
                    } else if ($('#whiteboard').text() > 70) {
                        return '<h1 class="titletext" style="color: grey"><b>你在本次做答中</b></h1>' +
                            '<h1 class="titletext" style="color: whitesmoke"><b>一共得到了' + $('#whiteboard').text() + '分</b></h1>' +
                            '<h5 class="titletext" style="color: #000000">你是教授無誤吧</h5>'
                    };
                };
            });
            $('#endtext').fadeIn();
            $('#whiteboard').css('visibility', 'hidden')
        };
    });
});