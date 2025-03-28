$(document).ready(()=>{

    //board.html에서 로그인창 닫기
    $('#board #close').click(()=>{
        $('#board #login').fadeOut();
    });

    //board.html에서 + 클릭시 내용이 보인다
    const btn_board = $('#board #boards button');

    btn_board.click(e => {
        // 클릭된 버튼을 찾습니다
        const $clickedBtn = $(e.target);
        
        // 이미 'view' 클래스를 가진 버튼이 있는 경우
        if ($clickedBtn.hasClass("view")) {
            // 'view' 버튼을 눌렀을 때
            $clickedBtn.removeClass('view').text('add'); // 'add'로 변경
            $clickedBtn.parent().next().slideUp(); // 해당 항목 슬라이드 업
        } 
        else {
            // 'view' 클래스가 없는 다른 버튼을 눌렀을 때
            // 모든 버튼을 원래 상태로 돌립니다
            $('#board #boards button').removeClass('view').text('add');
            $('#board #boards ul').slideUp();
            
            // 클릭된 버튼을 'view'로 설정하고 'remove'로 텍스트 변경
            $clickedBtn.addClass('view').text('remove');
            $clickedBtn.parent().next().slideDown(); // 해당 항목 슬라이드 다운
        }
    });



});//////js 끝!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!