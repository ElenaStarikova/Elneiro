function tag (params) {
    let elem = document.createElement(params.tag)
    params.parent.append(elem)
    elem.className = params.className
    return elem
}



class SitePage {
    constructor() {
        this.render()
        this.addListener()
    }
    render() {
        this.wrapper() 
        
        this.information()
        this.projects()
      
        this.datasets()
       
        this.team2()
        this.contacts() 
        
    }
    // addListener() {
    //     this.headerPage.addEventListener('click', (event) => {
    //         console.log(1)
    //         let button = event.target.closest(".header__button")

    //         if(button.dataset.number == 1) {
    //             window.scrollTo({top: this.contentHolderInfo.getBoundingClientRect().top + window.pageYOffset})
    //         }
    //     })

    // }
    wrapper() {
        this.wrapper = tag({tag: "div", parent: document.body, className: 'wrapper'})
        this.header() 
        
        this.mainPage()
        this.arrowUp()
        // this.information()
        // this.projects()
        // this.datasets()
        // this.team2()
        // this.contacts()
    }
   
    header() {
        this.headerPage = tag({tag: "div", parent: this.wrapper, className: 'page__header'})

        // this.headerPage.insertAdjacentHTML('beforeEnd', '<div class="header__logo"><img class="logo__img" src="./assets/img/logo.png" ></div>')
        this.headerPage.insertAdjacentHTML('beforeEnd', '<div class="header__button header__button_elneiro" data-number=1><h3 class="button__text"  >Эльнейро</h3><span class="line"></span></div>')
        this.headerPage.insertAdjacentHTML('beforeEnd', '<div class="header__button header__button_projects"data-number=2><h3 class="button__text" >Проекты</h3><span class="line"></span></div>')
        this.headerPage.insertAdjacentHTML('beforeEnd', '<div class="header__button header__button_investors"><h3 class="button__text" data-number=3>Датасеты</h3><span class="line"></span></div>')
        this.headerPage.insertAdjacentHTML('beforeEnd', '<div class="header__button header__button_team" data-number=3><h3 class="button__text" >Команда</h3><span class="line"></span></div>')
        
        this.headerPage.insertAdjacentHTML('beforeEnd', '<div class="header__icon" ><a href="https://t.me/EIT_vis"><img class="icon__img" src="./assets/img/telegram.png"></a></div>')
        this.headerPage.insertAdjacentHTML('beforeEnd', '<div class="header__icon"><a href="mailto:elneiro@mail.ru"><img class="icon__img" src="./assets/img/email.png"></a></div>')
        this.headerPage.insertAdjacentHTML('beforeEnd', '<div class="header__button header__button_contacts" place-self="flex-end" data-number=4><h3 class="button__text" >Контакты</h3><span class="line"></span></div>')

        this.mobileHeader = tag({tag: "div", parent: this.wrapper, className: 'page__mobileheader'})

        this.mobileBar = tag({tag: "div", parent: this.mobileHeader, className: 'mobile__bar'})
        this.mobileBar.insertAdjacentHTML('beforeEnd', '<div id="menu-bar" > <div id="bar1" class="bar"></div>  <div id="bar2" class="bar"></div> <div id="bar3" class="bar"></div> </div>')

        this.mobileHeader.insertAdjacentHTML('beforeEnd', '<div class="menu-bg" id="menu-bg"></div>')

        this.mobileNavigation = tag({tag: "div", parent: this.mobileHeader, className: 'mobile__navigation'})
        this.mobileNavigation.setAttribute('id', 'nav')

        this.mobileNavigation.insertAdjacentHTML('beforeEnd', '<ul class="nav__list"><li class="mobileheader__button_elneiro list__item" data-scroll=".container__contentholderInfo">Эльнейро</li> <li class="mobileheader__button_projects list__item" data-scroll=".projects__container">Проекты</li> <li class="eader__button_investors list__item" data-scroll=".datasets__container">Датасеты</li> <li class="mobileheader__button_team list__item" data-scroll=".team__container">Команда</li> <li class="mobileheader__button_contacts list__item" data-scroll=".contacts__container">Контакты</li> </ul>')
        
    } 


    arrowUp() {
        this.arrowHolder = tag({tag: "div", parent: this.wrapper, className: 'btnUp '})

        this.arrowHolder.insertAdjacentHTML('beforeEnd', '<svg width="37" height="48" viewBox="0 0 47 58" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.1356 56.9198L23.3402 1.08" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>         <path d="M23.3401 1.08001L1.37256 29.1371" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>        <path d="M23.3402 1.07998L45.1015 29.2973" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>        </svg> ')

    }
    page() {
        this.pageMain = tag({tag: "div", parent: this.wrapper, className: 'page'})
       
    }
    container() {
        this.containerPage = tag({tag: "div", parent: this.pageMain, className: 'page__container'})
    }
    // footer() {
    //     this.footerPage = tag({tag: "div", parent: this.containerPage, className: 'container__footer'})
    //     this.footerPage.innerHTML = '<em>Деятельность осуществляется при грантовой поддержке "Фонда содействия инновациям”</em> <br>  <b>2023 Ⓒ ООО “Эльнейро” </>'
        
    // }
    mainPage() {
        this.page()
        // this.header()
        this.container()
        
        
        let contentHolder = tag({tag: "div", parent: this.containerPage, className: 'container__contentholder'})

        let leftPanel = tag({tag: "div", parent: contentHolder, className: 'contentHolder__leftPanel'})

        let mainText = tag({tag: "h1", parent: leftPanel, className: 'leftPanel__maintext'})

        mainText.innerHTML = 'Решения, основанные <br>на исследовании <br>электроимпеданса'

        let additionalText = tag({tag: "h2", parent: leftPanel, className: 'leftPanel__additionaltext'})
        additionalText.innerHTML = ' <br>Мы создаем новые простые решения, которые помогают выявить различные изменения в организме и диагностировать состояние здоровья'

        this.buttonHolder = tag({tag: "div", parent: this.containerPage, className: 'leftPanel__buttonholder'})

        this.buttonHolder.insertAdjacentHTML('beforeEnd', '<div class="main__button main__button_light"><h3 class="mainbutton__text"><a class="button__link" href="https://t.me/EIT_vis">Связаться с нами</a></h3></div>')

        let rightPanel = tag({tag: "div", parent: contentHolder, className: 'contentHolder__rightPanel'})
        rightPanel.innerHTML = '<img class="rightpanel__image" src="./assets/img/mainPagePhoto.png" >'

        this.mainPageY = contentHolder.offsetHeight

        // this.footer()
        this.addListener()
    }
    information() {
        this.pageMain = tag({tag: "div", parent: this.wrapper, className: 'page'})
        // this.header()
        this.containerPage = tag({tag: "div", parent: this.pageMain, className: 'page__container page__container_light'})

        // this.pageContainer.classList.add('page__container_light')
        
        this.contentHolderInfo = tag({tag: "div", parent: this.containerPage, className: 'container__contentholderInfo'})

        let leftPanelInfo = tag({tag: "div", parent: this.contentHolderInfo, className: 'contentHolder__leftPanelInfo'})

        let mainInformation = tag({tag: "h2", parent: leftPanelInfo, className: 'leftPanel__mainInformation'})
        mainInformation.innerHTML = "О КОМПАНИИ"
        let additionalInformation = tag({tag: "h2", parent: leftPanelInfo, className: 'leftPanel__additionalInfortmation'})
        additionalInformation.innerHTML = 'Компания Эльнейро с 2016 года занимается разработкой решений для медицины на основе исследования электроимпеданса и использования технологий искусственного интеллекта <br><br> <a href="https://drive.google.com/file/d/1SwiWBugkbJA1RKrqLUcOubF8oWZyPN0p/view?usp=share_link" class="leftPanel__linkInfortmation">Подробно о нас и наших проектах</a>'
        

        let rightPanelInfo = tag({tag: "div", parent: this.contentHolderInfo, className: 'contentHolder__rightPanelInfo'})
        let imgInformation = tag({tag: "div", parent: rightPanelInfo, className: 'rightPanelInfo__img'})
        imgInformation.innerHTML = '<img class="rightPanelInfo__img" class="rightpanelInfo__image" src="./assets/img/photo2.png">'
        let rightPanelInfoText = tag({tag: "div", parent: this.containerPage, className: 'rightPanelInfo__text'})
        rightPanelInfoText.innerHTML = "Мы увлечены идеей создания новых простых<br> решений для диагностики состояния здоровья!"

        // this.informationY = contentHolderInfo.offsetHeight 

        // this.footer()
        this.addListener()
    }
    projects() {
        this.page()
        // this.header()
        this.containerProjects = tag({tag: "div", parent: this.pageMain, className: 'projects__container'})

         let projectsName = tag({tag: "h2", parent: this.containerProjects, className: 'container__projectsName'})
        projectsName.innerHTML = "ПРОЕКТЫ"

        let contentHolderProjects = tag({tag: "div", parent: this.containerProjects, className: 'container__contentholderProjects'})

       
        this.projectHolder1 = tag({tag: "div", parent: contentHolderProjects, className: 'contentHolderProjects__projectholder'})
        
        this.projectHolder1.insertAdjacentHTML('beforeEnd', '<div class="projectholder__image"><img class="project__image" src="./assets/img/Projects/photo3.png"></div>')
        let projectInfo1 =  tag({tag: "div", parent: this.projectHolder1, className: 'projectholder__information'})

        projectInfo1.insertAdjacentHTML('beforeEnd', '<h2 class="projectinfo__projectname">CRYO</h2>')
        projectInfo1.insertAdjacentHTML('beforeEnd', '<h3 class="projectinfo__text">Система визуализации биологической ткани во время криохирургических операций</h3>')
        projectInfo1.insertAdjacentHTML('beforeEnd', '<a href="https://drive.google.com/file/d/1RMLf3fGsiTj0lQT3LKMVi_ry98Esctfr/view?usp=share_link" class="projectinfo__link">Презентация</a>')

        this.projectHolder3 = tag({tag: "div", parent: contentHolderProjects, className: 'contentHolderProjects__projectholder'})
        this.projectHolder3.insertAdjacentHTML('beforeEnd', '<div class="projectholder__image"><img class="project__image" src="./assets/img/Projects/photo5.png"></div>')
        let projectInfo3 =  tag({tag: "div", parent: this.projectHolder3, className: 'projectholder__information'})
        projectInfo3.insertAdjacentHTML('beforeEnd', '<h2 class="projectinfo__projectname">Recompositor</h2>')
        projectInfo3.insertAdjacentHTML('beforeEnd', '<h3 class="projectinfo__text">Электроимпедансный анализатор состава тела, который оценивает 8 параметров за 2 секунды</h3>')
        projectInfo3.insertAdjacentHTML('beforeEnd', '<a href="https://docs.google.com/presentation/d/1h1ySH-94KXemn5oi7Lc2edRUGoY3Te8H/edit?usp=share_link&ouid=100466589092849602648&rtpof=true&sd=true" class="projectinfo__link">Презентация</a>')

        this.projectHolder2 = tag({tag: "div", parent: contentHolderProjects, className: 'contentHolderProjects__projectholder'})
        this.projectHolder2.insertAdjacentHTML('beforeEnd', '<div class="projectholder__image"><img class="project__image" src="./assets/img/Projects/elneiro.png"></div>')
        let projectInfo2 =  tag({tag: "div", parent: this.projectHolder2, className: 'projectholder__information'})
        projectInfo2.insertAdjacentHTML('beforeEnd', '<h2 class="projectinfo__projectname">Эльнейро</h2>')
        projectInfo2.insertAdjacentHTML('beforeEnd', '<h3 class="projectinfo__text">Технология встраиваемых систем поддержки принятия врачебных решений для электроимпедансной томографии</h3>')
        projectInfo2.insertAdjacentHTML('beforeEnd', '<a href="https://docs.google.com/presentation/d/1u6ZGG6IhPKrqeUnM1i4MFvsm4PsDEmia/edit?usp=share_link&ouid=100466589092849602648&rtpof=true&sd=true"  class="projectinfo__link">Презентация</a>')

       

        // this.footer()
        this.addListener()
    }


        datasets() {
            this.page()
            // this.header()
            
            this.containerDatasets = tag({tag: "div", parent: this.pageMain, className: 'datasets__container'})
            let datasetsName = tag({tag: "h2", parent: this.containerDatasets, className: 'datasetsname'})
            datasetsName.innerHTML = 'ДАТАСЕТЫ'
            
            let datasets = tag({tag: "div", parent: this.containerDatasets, className: 'datasets'})

            this.datasetsHolder1 = tag({tag: "div", parent: datasets, className: 'datasets__holder'})
            
            this.datasetsHolder1.insertAdjacentHTML('beforeEnd', '<img class="dataset__image" src="./assets/img/datasets/dataset1.png">')
            this.datasetsHolder1.insertAdjacentHTML('beforeEnd', '<div class="datasetsholder__text"><b>Программное средство «EIT data generator» для автоматического создания in silico набора больших парных данных «результат-аннотация»</b> <br> <br> Позволяет создавать набор данных (датасетов) для двухмерного объекта исследования  произвольной формы с неоднородностями произвольной электрической проводимости и формы. </div>')

            // let datasetInfo1 = tag({tag: "div", parent: datasets, className: 'dataset__info'})
            // datasetInfo1.innerHTML = 'Позволяет создавать набор данных (датасет) для двухмерного объекта исследования произвольной формы с неоднородностями произвольной электрической проводимости и формы. Скорость генерации данных строго зависит от производительности и количества ядер центрального процессора компьютера, соответственно, для использования данного инструмента рекомендуется применение серверных многоядерных решений. На основе полученного датасета возможно обучать нейронные сети для последующей сверхбыстрой реконструкции реальных электроимпедансных томографических изображений.'

            this.datasetsHolder2 = tag({tag: "div", parent: datasets, className: 'datasets__holder'})
            
            this.datasetsHolder2.insertAdjacentHTML('beforeEnd', '<img class="dataset__image" src="./assets/img/datasets/dataset2.png">')
            this.datasetsHolder2.insertAdjacentHTML('beforeEnd', '<div class="datasetsholder__text"><b>Набор симулированных in silico данных для обучения искусственных нейронных сетей «ЭИТ-ИИ-Цилиндр-20-2-208-1»</b><br><br>Набор симулированных данных «ЭИТ-ИИ-Цилиндр-20-2-208-1» позволяет обучать искусственные нейронные сети различной внутренней структуры распознавать непроводящие объекты преимущественно круглого сечения радиусом от 1 до 4 см</div>')

            // let datasetInfo2 = tag({tag: "div", parent: datasets, className: 'dataset__info'})
            // datasetInfo2.innerHTML = 'Полученный новый набор симулированных данных «ЭИТ-ИИ-Цилиндр-20-2-208-1» позволяет обучать искусственные нейронные сети различной внутренней структуры распознавать непроводящие объекты (например, пластик) преимущественно круглого сечения радиусом от 1 до 4 см и реконструировать их изображения в режиме (около-) реального времени на основе электроимпедансных измерений напряжения. Датасет создан на основе двухмерной модели среза цилиндрического фантома радиусом 20 см, заполненном относительно проводящей средой – физраствором или не дистиллированной водой.'
            
            this.datasetsHolder3 = tag({tag: "div", parent: datasets, className: 'datasets__holder'})
            
            this.datasetsHolder3.insertAdjacentHTML('beforeEnd', '<img class="dataset__image" src="./assets/img/datasets/dataset3.png">')
            this.datasetsHolder3.insertAdjacentHTML('beforeEnd', '<div class="datasetsholder__text"><b>Модернизированное программное средство для ЭИТ томографа v1.1</b><br> <br> Разработка встроенного программного средства для визуализации биологической ткани, использующий принцип электрической импедансной томографии. </div>')

            // let datasetInfo3 = tag({tag: "div", parent: datasets, className: 'dataset__info'})
            // datasetInfo3.innerHTML = 'Описание'
            // this.footer()
            this.addListener()
    }


    team2() {
        this.page()
       // this.header()
       this.containerTeam = tag({tag: "div", parent: this.pageMain, className: 'team__container'})

       let teamName = tag({tag: "h2", parent: this.containerTeam, className: 'teamsname2'})
       teamName.innerHTML = 'СОТРУДНИКИ КОМПАНИИ'
       
       let team = tag({tag: "div", parent: this.containerTeam, className: 'team2'})

       let teamMember = tag({tag: "div", parent: team, className: 'team__member2'})
       
       teamMember.insertAdjacentHTML('beforeEnd', '<img class="member__img" src="./assets/img/team/Koroluk1.png" >')
       teamMember.insertAdjacentHTML('beforeEnd', '<details class="member__details"><summary class="member__summary"> <b>Королюк Евгений Сергеевич,<br> руководитель проекта</b></summary> <div class="member__popover" ><p class="member__text2">Занимается электроимпедансной визуализацией с 2016 года. Ведущий инженер компании, руководитель инновационных медицинских проектов. <br>  Ассистент научно-образовательной лаборатории «Бионические цифровые платформы» Сибирского медицинского университета </p></div></details>')

    //    <ul class="member__text2"><li> Программирование встраиваемых медицинских систем </li> <li> Участие в развитии технологии  - более 5 лет</li><li> Разработчик медицинской аппаратуры</li></ul>


       let teamMember2 = tag({tag: "div", parent: team, className: 'team__member2'})
       
       teamMember2.insertAdjacentHTML('beforeEnd', '<img class="member__img"" src="./assets/img/team/Brazovskiy.png"  >')
       teamMember2.insertAdjacentHTML('beforeEnd', ' <details class="member__details"><summary class="member__summary"><b>Бразовский Константин Станиславович,<br> научный руководитель проекта</b></summary><div class="member__popover" ><p class="member__text2">Занимается исследованием электроимпеданса с 1994 года.<br> Научный руководитель проекта. Специалист в области Big Data, R-разработчик. Более 20 лет в разработке систем электроимпедансной визуализации. <br>Доктор технических наук, профессор Исследовательской школы химических и биомедицинских технологий Томского политехнического университета. </p></div></deatils>')
      
    //    ul class="member__text2"><li>Доктор технических наук, научный руководитель проекта </li> <li>Data Scientist </li><li>Опыт работы с системами по электроимпедансной томографии более 15 лет </li><li>Профессор Томского политехнического университета </li></ul>


       let teamMember3 = tag({tag: "div", parent: team, className: 'team__member2'})
       
       teamMember3.insertAdjacentHTML('beforeEnd', '<img class="member__img" src="./assets/img/team/Tolmachev.png" >')
       teamMember3.insertAdjacentHTML('beforeEnd', '<details class="member__details"><summary class="member__summary"><b>Толмачев Иван Владиславович</b></summary><div class="member__popover" ><p class="member__text2"> Занимается анализом медицинских данных и разработкой предиктивных моделей для задач медицины и здравоохранения более 15 лет.  <br>    Data Scientist.  С# разработчик. Эксперт центра клинических исследований СФО. Руководитель научной лаборатории в области искусственного интеллекта и медицинской инженерии двойного назначения. Руководитель стратегического проекта Сибирского медицинского университета по разработке и развитию цифровых решений в медицине и здравоохранении.        Кандидат медицинских наук, доцент кафедры медицинской и биологической кибернетики Сибирского медицинского университета.    </p></div></deatils>')

    //    <ul class="member__text2"> <li>Data Scientist. Программист.</li> <li>Экспериментальные исследования. </li><li>Регистрация разработанного изделия</li></ul> 
       
       let teamMember4 = tag({tag: "div", parent: team, className: 'team__member2'})
       
       teamMember4.insertAdjacentHTML('beforeEnd', '<img class="member__img" src="./assets/img/team/Konev.png" >')
       teamMember4.insertAdjacentHTML('beforeEnd', '<details class="member__details"><summary class="member__summary"><b>Конев Артур Валерьевич </b></summary><div class="member__popover" ><p class="member__text2">Занимается системами медицинской визуализации (технологий компьютерного зрения в цифровой рентгенографии) и системами поддержки принятия врачебных решений в цифровой рентгенографии более 10 лет.<br>       С++ разработчик. Профессиональный разработчик программного обеспечения для АСУ в области медицины и здравоохранения. </p></div></details>')
     
    //    <ul class="member__text2"><li>Программист медицинского ПО (20 лет опыта)</li> <li> Аспирант томского политехнического университета</li></ul>
       
       let teamMember5 = tag({tag: "div", parent: team, className: 'team__member2'})
       
       teamMember5.insertAdjacentHTML('beforeEnd', '<img class="member__img" src="./assets/img/team/Pleshkov.png" >')
       teamMember5.insertAdjacentHTML('beforeEnd', '<details class="member__details"><summary class="member__summary"><b> Плешков Максим Олегович</b></summary><div class="member__popover" ><p class="member__text2">Занимается научными исследованиями в области биомедицины более 7 лет.<br> Python-разработчик, специалист в области Data Science и моделирования физических процессов. PhD biomedical research, младший научный сотрудник научно-образовательной лаборатории «Бионические цифровые платформы» Сибирского медицинского университета.</p></div></details>')

    //    <ul class="member__text2"><li>Физическое моделирование </li> <li>Машинное обучение, нейросети </li><li>Разработка ПО для построения томографических изображений </li></ul>

       let teamMember6 = tag({tag: "div", parent: team, className: 'team__member2'})
       
       teamMember6.insertAdjacentHTML('beforeEnd', '<img class="member__img" src="./assets/img/team/Gaak.png" >')
       teamMember6.insertAdjacentHTML('beforeEnd', '<details class="member__details"><summary class="member__summary"><b> Гаак Дарья Викторовна</b></summary><div class="member__popover"><p class="member__text2">Занимается сопровождением инновационных медицинских проектов и маркетинговыми исследованиями более 5 лет.<br>Менеджер в здравоохранении, специалист в области Data Science. </p></div></details>')

       
       // this.footer()
       this.addListener()
   }

    contacts() {
        this.page()
        // this.header()
        this.containerContacts = tag({tag: "div", parent: this.pageMain, className: 'contacts__container'})

        
        
        let contacts = tag({tag: "div", parent:this.containerContacts, className: 'contacts'})

        let leftPanelContacts = tag({tag: "div", parent: contacts, className: 'contacts__leftpanel'})

        let contactsName = tag({tag: "h2", parent: leftPanelContacts, className: 'contactsname'})
        contactsName.innerHTML = 'КОНТАКТНАЯ ИНФОРМАЦИЯ'

        let textContacts = tag({tag: "h2", parent: leftPanelContacts, className: 'leftpanelcontacts__text'})
        textContacts.innerHTML = '<b>ООО “Эльнейро”</b> <br> <br> <br> г. Томск <br> <br> <a href="mailto:elneiro@mail.ru">elneiro@mail.ru</a> <br> <a href="https://t.me/EIT_vis">@EIT_vis</a><br> <br> ИНН 7000001494<br>  ОГРН 1227000008993'

          

        let rightPanelContacts = tag({tag: "div", parent: contacts, className: 'contacts__righpPanel'})
        rightPanelContacts.innerHTML = '<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/67/tomsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Томск</a><a href="https://yandex.ru/maps/67/tomsk/house/moskovskiy_trakt_2s7/bE0YfwNkSEADQFtsfXh2cH5kZw==/?ll=84.944155%2C56.471273&utm_medium=mapframe&utm_source=maps&z=16.66" style="color:#eee;font-size:12px;position:absolute;top:14px;">Московский тракт, 2с7 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=84.944155%2C56.471273&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzYyODA1NhI_0KDQvtGB0YHQuNGPLCDQotC-0LzRgdC6LCDQnNC-0YHQutC-0LLRgdC60LjQuSDRgtGA0LDQutGCLCAy0YE3IgoNaOOpQhWV4mFC&z=16.66" class="map" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>'
        rightPanelContacts.insertAdjacentHTML('beforeEnd', '<h3 class="rightpanelcontacts__text">Деятельность осуществляется      при грантовой поддержке “Фонда содействия инновациям”</h3>')


        // this.footer()
        this.addListener()
    }
    addListener() { 
        let buttonElneiro = document.querySelector('.header__button_elneiro')
        buttonElneiro.addEventListener('click', (event) => {
            window.scrollTo({top:  this.contentHolderInfo.getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth'})
        })

        let buttonProjects = document.querySelector('.header__button_projects')
        buttonProjects.addEventListener('click', (event) => {
            window.scrollTo({top: this.containerProjects.getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth'})
        })

        let buttonDatasets = document.querySelector('.header__button_investors')
        buttonDatasets.addEventListener('click', (event) => {
            window.scrollTo({top:  this.containerDatasets.getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth'})
        })

        let buttonTeam = document.querySelector('.header__button_team')
        buttonTeam.addEventListener('click', (event) => {
            window.scrollTo({top:  this.containerTeam.getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth'})
        })

        let buttonContacts = document.querySelector('.header__button_contacts')
        buttonContacts.addEventListener('click', (event) => {
            window.scrollTo({top:  this.containerContacts.getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth'})
        })

        let menuButton = document.querySelector('#menu-bar')
        menuButton.addEventListener('click', (event) => {
            this.menuOnClick()
        })

        document.addEventListener('click', (event) => {
            if (event.target.dataset.scroll) {
                const li = document.querySelector(event.target.dataset.scroll)
                window.scrollTo({top:  li.getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth'})
            }
            
        })

        // В десктор версии кнопка всегда скрыта, 
        // в мобильной версии появляется только, когда идет прокрутка больше 1500пх
       
        window.addEventListener('scroll', () => {
            
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            
            // если страница прокручена больше чем на 700px, то делаем кнопку видимой, иначе скрываем
            scrollY > 600 ? this.buttonUpShow() : this.buttonUpHide();
        
          });
          // при нажатии на кнопку .btn-up
        //    let arrowBtnUp = document.querySelector('.btnUp')
        document.addEventListener('click', (event) => {
            if (event.target.closest('.btnUp')) {
                console.log(10)
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
            }
        })
    }

   buttonUpShow() {
        this.arrowHolder.classList.add('btn-up_show');
   } 
   buttonUpHide() {
        this.arrowHolder.classList.remove('btn-up_show');
   } 
    
   menuOnClick() {
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("nav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
      }
}
