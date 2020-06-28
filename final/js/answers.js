$(document).ready(function () {
    var q = 1;
    var questions = 10;
    var difficulty,v,interval = ' ',min = 0,sec = 0;
    var bingo = new Audio('./sounds/crrect_answer3.mp3')
    var wrong = new Audio('./sounds/blip04.mp3')
    var ending = new Audio('./sounds/Silly Intro.mp3')
    ending.loop = true

    function counting() {
        if (sec < 10 && min < 10) {
            $('#timing').text('作答時間 0' + min + interval + '0' + Math.floor(sec));
        } else if (sec >= 10 && min < 10) {
            $('#timing').text('作答時間 0' + min + interval + Math.floor(sec));
        } else if (sec < 10 && min >= 10) {
            $('#timing').text('作答時間 ' + min + interval + '0' + Math.floor(sec));
        } else {
            $('#timing').text('作答時間 ' + min + interval + Math.floor(sec));
        };

        if (Math.floor(sec) != sec) {
            interval = ' '
        } else {
            interval = ':'
        }

        sec += 0.5;
        if (sec == 60) {
            sec = 0;
            min++;
        }
        if (q > 1 && q <= questions) {
            setTimeout(counting,500);
        };
    };

    $('#senior').click(function () {
        v = new Audio('./sounds/Magic in the Garden.mp3');
        v.loop = true;
        v.play();
        difficulty = 'easy';
        $('#whiteboard').css('display','inline-block');
        $('#starttext').empty();
        $('#starttext').css('display', 'none');
        $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
        q++;
        counting()
    });
    $('#bachelor').click(function () {
        v = new Audio('./sounds/Find Them.mp3');
        v.loop = true;
        v.play();
        difficulty = 'hard';
        $('#whiteboard').css('display','inline-block');
        $('#starttext').empty();
        $('#starttext').css('display', 'none');
        $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
        q++;
        counting()
    });

    $('#A').click(function () {
        if (q <= questions) {
            if (q != 1 && Number($('#answercode').text()) == 1) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                bingo.pause();
                bingo.currentTime = 0;
                bingo.play();
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
                wrong.play();
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                wrong.play();
            };
            $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
            if (q > 1) {
                q++;
            }
        } else {
            v.pause();
            ending.play();
            $('#timing').empty();
            $('#timing').css('top','35%');
            $('#timing').html(
                '本次作答時間為: <br>' + min + '分' + Math.floor(sec) + '秒'
            );
            if (q == questions + 1 && Number($('#answercode').text()) == 1) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                bingo.pause();
                bingo.currentTime = 0;
                bingo.play();
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
                wrong.play();
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                wrong.play();
                q++;
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
            $('#whiteboard').css('visibility', 'hidden');
            setTimeout($('#endtext').fadeIn(),2000);
        }
    });

    $('#B').click(function () {
        if (q <= questions) {
            if (q != 1 && Number($('#answercode').text()) == 2) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                bingo.pause();
                bingo.currentTime = 0;
                bingo.play();
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
                wrong.play();
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                wrong.play();
            }
            ;
            $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
            if (q > 1) {
                q++;
            }
        } else {
            v.pause();
            ending.play();
            $('#timing').empty();
            $('#timing').css('top','35%');
            $('#timing').html(
                '本次作答時間為: <br>' + min + '分' + Math.floor(sec) + '秒'
            );
            if (q == questions + 1 && Number($('#answercode').text()) == 2) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                bingo.pause();
                bingo.currentTime = 0;
                bingo.play();
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
                wrong.play();
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                wrong.play();
                q++;
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
            $('#whiteboard').css('visibility', 'hidden');
            setTimeout($('#endtext').fadeIn(),2000);
        }
    });

    $('#C').click(function () {
        if (q <= questions) {
            if (q != 1 && Number($('#answercode').text()) == 3) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                bingo.pause();
                bingo.currentTime = 0;
                bingo.play();
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
                wrong.play();
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                wrong.play();
            }
            ;
            $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
            if (q > 1) {
                q++;
            };
        } else {
            v.pause();
            ending.play();
            $('#timing').empty();
            $('#timing').css('top','35%');
            $('#timing').html(
                '本次作答時間為: <br>' + min + '分' + Math.floor(sec) + '秒'
            );
            if (q == questions + 1 && Number($('#answercode').text()) == 3) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                bingo.pause();
                bingo.currentTime = 0;
                bingo.play();
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
                wrong.play();
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                wrong.play();
                q++;
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
            $('#whiteboard').css('visibility', 'hidden');
            setTimeout($('#endtext').fadeIn(),2000);
        }
    });

    $('#D').click(function () {
        if (q <= questions) {
            if (q != 1 && Number($('#answercode').text()) == 4) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                bingo.pause();
                bingo.currentTime = 0;
                bingo.play();
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
                wrong.play();
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                wrong.play();
            };
            $('#questext').load('./questions/' + difficulty + '/question' + q.toString() + '.xml');
            if (q > 1) {
                q++;
            };
        } else {
            v.pause();
            ending.play();
            $('#timing').empty();
            $('#timing').css('top','35%');
            $('#timing').html(
                '本次作答時間為: <br>' + min + '分' + Math.floor(sec) + '秒'
            );
            if (q == questions + 1 && Number($('#answercode').text()) == 4) {
                $('#whiteboard').text(Number($('#whiteboard').text()) + 10);
                bingo.pause();
                bingo.currentTime = 0;
                bingo.play();
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
                wrong.play();
                $('#starttext').empty();
                $('#starttext').html(
                    '<img class="correctness" src="./imgs/wrong.png" alt="wrong">' +
                    '<div class="correcting">答錯了哦ㄏㄏ</div>'
                );
                $('.correcting').css('color', 'white');
                $('.correcting').css('background-color','#ff0000');
                $('#starttext').fadeIn(1000);
                $('#starttext').fadeOut(1000);
                wrong.play();
                q++;
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
            $('#whiteboard').css('visibility', 'hidden');
            setTimeout($('#endtext').fadeIn(),2000);
        };
    });
});