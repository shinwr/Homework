    // 랜덤 색상 변환 
    const getRandomHexaColor = () => {
        const hexa = '0123456789abcdef';
        let color = '#';
        for (var i = 0; i < 6; i ++) {
            color += hexa[Math.floor(Math.random()*16)];
        }
        return color;
    };

    setInterval(() => {
        document.querySelector('body').style.backgroundColor = 
        getRandomHexaColor();
    }, 100);

// 시계 만들기
    const clockContent = document.querySelector('.now');

    const getCurrentTime = () => {
        // 현재 시간을 변환하는 객체 date
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() +1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        text1 = `${year}년 ${month < 10 ? `0${month}` : month}월 ${day < 10 ? `0${day}` : day}일`;
        text2 = `${hours < 10 ? `0${hours}` : hours}시 ${minutes < 10 ? `0${minutes}` : minutes}분 ${seconds < 10 ? `0${seconds}` : seconds}초` ;
        clockContent.innerText = "오늘은 " + text1 + " 현재 시각은 " + text2 ;
    };

    const initClock = () => {
        getCurrentTime();
        setInterval(getCurrentTime,1000);

    };

    initClock();