function time() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
  
    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=ZN5WGEIR6RyBLmDtW55wpvHHSX%2FrvN4wxkMwfs2U9kPGADbga%2FDxAV1E6l5xnzgSJrzOpc6fIXHq%2B2ArmG4w8Q%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20250427&base_time=${hours}${minutes}&nx=74&ny=63`;

    return url;
}


setInterval(() => {
    const url = time();
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const items = data.response.body.items.item;

        items.forEach(item => {
          if(item.category === 'PTY') {
            console.log(`강수형태(PTY): ${item.obsrValue === '0' ? '비 없음' : '비 또는 눈'}`);
          } else if(item.category === 'REH') {
            console.log(`습도(REH): ${item.obsrValue}%`);
          } else if(item.category === 'RN1') {
            console.log(`1시간 강수량(RN1): ${item.obsrValue}mm`);
          } else if(item.category === 'T1H') {
            console.log(`기온(T1H): ${item.obsrValue}°C`);
          } else if(item.category === 'UUU') {
            console.log(`동서 바람 성분(UUU): ${item.obsrValue}m/s`);
          } else if(item.category === 'VEC') {
            console.log(`풍향(VEC): ${item.obsrValue}° (${getDirection(item.obsrValue)})`);
          } else if(item.category === 'VVV') {
            console.log(`남북 바람 성분(VVV): ${item.obsrValue}m/s`);
          } else if(item.category === 'WSD') {
            console.log(`풍속(WSD): ${item.obsrValue}m/s`);
          }
        });
      })
      .catch(error => {
        console.error("데이터 불러오기 실패:", error);
      });
}, 1000);

function getDirection(degree) {
  if (degree >= 0 && degree < 45) return '북풍';
  if (degree >= 45 && degree < 90) return '북동풍';
  if (degree >= 90 && degree < 135) return '동풍';
  if (degree >= 135 && degree < 180) return '남동풍';
  if (degree >= 180 && degree < 225) return '남풍';
  if (degree >= 225 && degree < 270) return '남서풍';
  if (degree >= 270 && degree < 315) return '서풍';
  if (degree >= 315 && degree <= 360) return '북서풍';
  return '정보 없음';
}
