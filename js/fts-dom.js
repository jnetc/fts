let patyBox = document.querySelectorAll('.paty-box'), // Add poster image
    patyDateEls = document.querySelectorAll('.paty-dat'), // Add data, time and caption
    patyContEl = document.querySelectorAll('.paty-content'),
    patyParagEl = document.querySelectorAll('.paty-text'), // Add event text paragraph
    patyPriceEl = document.querySelectorAll('.paty-tag'), // Add event price
    patyAddBtn = document.querySelectorAll('.paty-add'), // Create event links
    nextBlocks = document.querySelectorAll('.next-blk'), // Dynamically generate next event boxes
    coursesDom = document.querySelector('.courses'), // Dynamically generate courses
    OurTeamDom = document.querySelector('.team-blk'); // Dynamically generate teammate  

  // CREATE NEW AJAX FOR EVENTS
let eventsData = new XMLHttpRequest();
  //  open( type, url/file, asunc);
eventsData.open("GET", "../json/cards.json", true);
eventsData.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let evenParse = JSON.parse(eventsData.responseText);
    renderEvents(evenParse);
    renderEventParagraphs(evenParse);
    renderComingEvents(evenParse);
    renderEventBtns(evenParse);
    addEventBtnVal(evenParse);

    // createSocBtns(evenParse);
  }
};
// send request
eventsData.send();

  // Create main dynamic elements
let renderEvents = data => {
  data.forEach((item, i, data) => {
    patyBox[i].insertAdjacentHTML('afterbegin',
      `<img src="${item.img}" alt="poster" title="poster">`)
    patyDateEls[i].insertAdjacentHTML('afterbegin',
      `<span>${item.date}</span>
       <time>${item.time}</time>`)
    patyContEl[i].insertAdjacentHTML('afterbegin',
      `<h3>${item.capt}</h3>`)
    patyPriceEl[i].insertAdjacentHTML('beforeend',
      `<span>${item.price}<sup>€</sup></span>`)
  })
}

  // Create Paragraphs
let renderEventParagraphs = getList => {
  getList.forEach((item, i, getList) => {
    for (let graph in item.text[0]) {
      patyParagEl[i].setAttribute("style", "height: 200px");
      patyParagEl[i].innerHTML += `<li class="liTxt">${item.text[0][graph]}</li>`
    }
  })
}
  // Create event contact buttons
let renderEventBtns = getButtons => {
  getButtons.forEach((item, i, getButtons) => {
    let createBtns = '';
    for (let btn in item.btns[0]) {
      createBtns += 
      `<a href="${item.btns[0][btn]}" title="${item.btns[0][btn]}">
          <svg role="img" class="icon-svg">
            <use xlink:href="./img/svg/icons.svg#${btn}"></use>
        </svg>
      </a>`
    }
    patyAddBtn[i].innerHTML = createBtns; 
  })
}

  // Create event extra adds for contact buttons
let addEventBtnVal = extAdds => {
  extAdds.forEach((item, i, extAdds) => {
    let eventBtnAdd = patyAddBtn[i].querySelectorAll('a');
    eventBtnAdd.forEach((add, j, eventBtnAdd) => {
        // Take value form title
      let titleVal = add.getAttribute('title');
        // Add 'mailto' to mail links
      if (titleVal.search("@") != -1) {
        add.href = 'mailto:' + item.btns[0].mail;
      }
      // Add 'tel' to phone links
      if (titleVal.search("358") != -1) {
        add.href = 'tel:' + item.btns[0].tel;        
      } 
    })
  })
}

  // Create coming events
let renderComingEvents = data => {
  data.forEach((item, i, data) => {
    const eventsObj = data[i].events[0];
    let createComeEvents = '';
    for ( let eventNum in eventsObj) {
      createComeEvents += `
      <div class="next-box" style="background-image: url(${eventsObj[eventNum][0].eventPoster})">
        <span class="next-date">
          <span>${eventsObj[eventNum][0].eventDate}</span>${eventsObj[eventNum][0].eventMonth}
        </span>
        <h5>${eventsObj[eventNum][0].eventCap}</h5>
        <span class="next-btn show-btn">${eventsObj[eventNum][0].eventBtn}</span>
        <p>${eventsObj[eventNum][0].eventCont}</p> 
      </div>`
    }
    nextBlocks[i].innerHTML = createComeEvents;
  })
}


  // CREATE NEW AJAX FOR COURSES
let coursesData = new XMLHttpRequest();
coursesData.open("GET", "../json/courses.json", true);
coursesData.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
  let crsParse = JSON.parse(coursesData.responseText);
    renderCourses(crsParse);
    renderCourseParagraphs(crsParse);
    renderCourseBtns(crsParse);
    addExtraCourseVal(crsParse);

    // createSocBtns(crsParse);
  }
};
coursesData.send();

  //Create DOM courses boxes
let renderCourses = data => {
  let createCourses = '';
  data.forEach((item, i, data) => {
    createCourses +=
    `<div class="flex-crs">
      <div class="crs-dat">
        <span class="crs-cls">${item.cls}</span> 
        <img src="${item.img}" alt="courses" title="poster">
      </div>
      <div class="crs-cont">
        <h4>${item.name}</h4>
        <ul class="crs-graphs"></ul>
      </div>
      <div class="crs-opt">
        <div class="crs-btns"></div>
        <div class="for-price">
          <span class="crs-tip">${item.period}</span>
          <span class="crs-price">${item.price}<sup>€</sup></span>
        </div>
      </div>
    </div>`
  });
  coursesDom.innerHTML += createCourses;
}

  // Create course paragraphs
let renderCourseParagraphs = getList => {
  let coursesList = document.querySelectorAll('.crs-graphs');
  getList.forEach((item, i, getList) => {
      for (let key in item.txt[0]) {
        coursesList[i].innerHTML += `<li>${item.txt[0][key]}</li>`;
      }
  });
}

  // Create course buttons
let renderCourseBtns = getButtons => {
  let coursesButtons = document.querySelectorAll('.crs-btns');
  getButtons.forEach((item, i, getButtons) => {
    let createBtns = '';
      for (let btn in item.btns[0]) {
        createBtns += 
        `<a href="${item.btns[0][btn]}" title="${item.btns[0][btn]}">
            <svg role="img" class="crs-svg">
              <use xlink:href="./img/svg/icons.svg#${btn}"></use>
          </svg>
        </a>`
      }
      coursesButtons[i].innerHTML = createBtns;     
  });  
}

  // Create event extra adds for contact buttons
let addExtraCourseVal = extAdds => {
  let coursesButtons = document.querySelectorAll('.crs-btns');
  extAdds.forEach((item, i, extAdds) => {
    let specialAdd = coursesButtons[i].querySelectorAll('a');
    specialAdd.forEach((add, j, specialAdd) => {
        // Take value form title
      let titleVal = add.getAttribute('title');
        // Add 'mailto' to mail links
      if (titleVal.search("@") != -1) {
        add.href = 'mailto:' + item.btns[0].mail;
      }
      // Add 'tel' to phone links
      if (titleVal.search("358") != -1) {
        add.href = 'tel:' + item.btns[0].tel;        
      } 
    })
  })
}

  // CREATE NEW AJAX FOR TEAM
let teamData = new XMLHttpRequest();
teamData.open("GET", "../json/team.json", true);
teamData.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
  let teamParse = JSON.parse(teamData.responseText);
    renderTeam(teamParse);
    renderTeamBtns(teamParse);
    addExtraTeamVal(teamParse);
  }
};
teamData.send();

  //Create DOM courses boxes
let renderTeam = data => {
  let createTeam = '';
  data.forEach((teammate, i, data) => {
    createTeam += 
    `<div class="teammate">
      <figure>
        <img src="${teammate.img}" alt="${teammate.name}" title="${teammate.name}">
        <svg role="img">
          <use xlink:href="./img/svg/fts-elem.svg#border-up"></use>
        </svg>
        <svg role="img">
          <use xlink:href="./img/svg/fts-elem.svg#border-down"></use>
        </svg>
      </figure>
      <h5>${teammate.name}</h5>
      <h6>${teammate.post}</h6>
      <svg role="img" class="stars">
        <use xlink:href="./img/svg/fts-elem.svg#stars"></use>
      </svg>
      <div class="team-btns"></div>
    </div>`
  })
  OurTeamDom.innerHTML = createTeam;
}

  // Create course buttons
let renderTeamBtns = getButtons => {
  getButtons.forEach((item, i, getButtons) => {
    let buttons = document.querySelectorAll('.team-btns');
    let createBtns = '';
      for (let btn in item.btns[0]) {      
        createBtns += 
        `<a href="${item.btns[0][btn]}" title="${item.btns[0][btn]}">
            <svg role="img" class="crs-svg">
              <use xlink:href="./img/svg/icons.svg#${btn}"></use>
          </svg>
        </a>`
      }
      buttons[i].innerHTML = createBtns;     
  });
}
  
  // Create event extra adds for contact buttons
let addExtraTeamVal = extAdds => {
  let coursesButtons = document.querySelectorAll('.team-btns');
  extAdds.forEach((item, i, extAdds) => {
    let specialAdd = coursesButtons[i].querySelectorAll('a');
    specialAdd.forEach((add, j, specialAdd) => {
        // Take value form title
      let titleVal = add.getAttribute('title');
        // Add 'mailto' to mail links
      if (titleVal.search("@") != -1) {
        add.href = 'mailto:' + item.btns[0].mail;
      }
      // Add 'tel' to phone links
      if (titleVal.search("358") != -1) {
        add.href = 'tel:' + item.btns[0].tel;        
      } 
    })
  })
}