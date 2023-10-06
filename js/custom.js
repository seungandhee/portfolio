$('#fullpage').fullpage({
  navigation: true,
  navigationTooltips: ['<span></span><h2>안녕하세요</h2><h4>신입 웹퍼블리셔<br>조승희 입니다! 💙</h4>', '<span></span><h2>Altools</h2><u>Redesign Publishing</u><h4>작업기여도 <b>100%</b></h4><p>반응형 | 제작기간: 4일</p>', '<span></span><h2>Casamia</h2><u>Redesign Publishing</u><h4>작업기여도 <b>100%</b></h4><p>반응형 | 제작기간: 5일</p>', '<span></span><h2>Daelim Bath</h2><u>Redesign Publishing</u><h4>작업기여도 <b>100%</b></h4><p>반응형 | 제작기간: 7일</p>', '<span></span><h2>Ktextile</h2><u>Team Project</u><h4>작업기여도 <b>50%</b></h4><p>반응형 | 제작기간: 2개월</p>', '<span></span><h2>Class101+</h2><u>Clone Coding</u><h4>작업기여도 <b>100%</b></h4><p>반응형 | 제작기간: 2일</p>'],
  bigSectionsDestination: top,
  scrollingSpeed: 1000,
  touchSensitivity: 20,
  anchors: ['', 'PROJECT1 : ALTOOLS', 'PROJECT2 : CASAMIA', 'PROJECT3 : DAELIMBATH', 'PROJECT4 : KTEXTILE', 'PROJECT5 : CLASS101+'],
  sectionsColor: ['#eee', '#eee', '#eee', '#eee', '#eee', '#eee'],
  afterLoad: function(anchor){
    $('.content-name').text(anchor);
  }
});


























