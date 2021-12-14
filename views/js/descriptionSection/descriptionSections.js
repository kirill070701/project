const screenWidth                       = window.screen.width;
const descriptionOne                    = document.getElementById("descriptOne");
const descriptionTwo                    = document.getElementById("descriptTwo");
const descriptionThree                  = document.getElementById("descriptThree")
const descriptionFour                   = document.getElementById("descriptFour");
const descriptionFourt                  = document.getElementById("descriptFourt");

const partitionOne                      = document.getElementById("partitOne");
const partitionTwo                      = document.getElementById("partitTwo")
const partitionThree                    = document.getElementById("partitThree")
const partitionFour                     = document.getElementById("partitFour");

if (screenWidth >=1150) {
    descriptionOne.innerHTML            = "&emsp;Узнайте на что способна одна из крупнейших сегментов современного развлечения. Познайте масштабы роста игровой индустрии, скорость ее роста на сегодняшнем рынке и степень ее внияния. Свежие обновления видеоигр, объемные знания и секреты о многих играх, интервью разработчиков и многое другое можно узнать в статях на нашем сайте.";
    descriptionTwo.innerHTML            = "&emsp;Эксклюзивные материалы по Dota2, последние новости по PUBG, прямые трансляции эксклюзивных турниров по CS:GO со всех концов мира и многое другое можно узнать у нас. Начинайте следить за киберспортивными новстями прямо сейчас и уже завтра станьте профессионалом прогнозов киберспортивных сорревнований."
    descriptionThree.innerHTML          = "&emsp;У нас вы узнаете всю информация о играх которые сейчас являются самыми популярными. Самые свежие статьи про видеоигры, свежие обзоры, решение технических проблем, превью ожидаемых проектов, коды и читы для игр, итоги выстовок и выступлений, это и многое другое можно узнать прямо сейчас на нашем сайте."
    descriptionFour.innerHTML           = "&emsp;Компьютерные и информационные технологии на сегодняшний день являются одним из важнейших частей жизни людей и если вы хотите оставаться в курсе последних событий, знать самые важные вещи из мира IT или следить за разработкой новейших технологий, то все это и многое другое можно узнать на нашем сайте. "
    descriptionFourt.innerHTML          = "&emsp;Читайте последние новости о компьютерных и информационных технологиях, анонсы и косплеи, процессоры нового поколения, обзоры VR технологий и многое другое только у нас в любое время, ведь мы единственные кто первым узнает сегодняшние новости в современныом мире информационных технологий."
    descriptionFour.style.lineHeight    = "1.6em"
    //descriptionFour.innerHTML           = "&emsp;Последнии обзоры современных трендов "
}else if (screenWidth <1150 && screenWidth >= 900){

    descriptionOne.style.lineHeight     = "1.8em";
    descriptionOne.innerHTML            = "&emsp;Узнайте на что способна одна из крупнейших сегментов современного развлечения. Познайте масштабы роста игровой индустрии, скорость ее роста на сегодняшнем рынке и степень ее внияния.";
    
    descriptionTwo.style.lineHeight     = "1.8em";
    descriptionTwo.innerHTML            = "&emsp;Эксклюзивные материалы по Dota2, последние новости по PUBG, прямые трансляции эксклюзивных турниров по CS:GO со всех концов мира и многое другое можно узнать у нас прямо сейчас.";

    descriptionThree.style.lineHeight   = "1.65em";
    descriptionThree.innerHTML          = "&emsp;У нас вы узнаете всё о играх которые сейчас являются самыми популярными. Самые свежие статьи, свежие обзоры, решение технических проблем, превью ожидаемых проектов и многое другое можно узнать прямо сейчас."

    
    if (screenWidth >=1100) {

        descriptionFour.style.lineHeight    = "1.6em";
        descriptionFourt.style.lineHeight   = "1.6em";
        descriptionFour.innerHTML       = "&emsp;Компьютерные и информационные технологии на сегодняшний день являются одним из важнейших частей жизни людей и если вы хотите оставаться в курсе последних событий, знать самые важные вещи из мира IT или следить за разработкой новейших технологий, то все это и многое другое можно узнать на нашем сайте."
        descriptionFourt.innerHTML      = "&emsp;Читайте последние новости о компьютерных и информационных технологиях, анонсы и косплеи, процессоры нового поколения, обзоры VR технологий и многое другое только у нас в любое время, ведь мы единственные кто первым узнает сегодняшние новости в современныом мире информационных технологий."
    
    }else if(screenWidth < 1100 && screenWidth >= 950){

        descriptionFour.style.lineHeight    = "1.4em";
        descriptionFourt.style.lineHeight   = "1.4em";
        descriptionFour.innerHTML       = "&emsp;Компьютерные и информационные технологии на сегодняшний день являются одним из важнейших частей жизни людей и если вы хотите оставаться в курсе последних событий, знать самые важные вещи из мира IT или следить за разработкой новейших технологий, то все это и многое другое можно узнать на нашем сайте."
        descriptionFourt.innerHTML      = "&emsp;Читайте последние новости о компьютерных и информационных технологиях, анонсы,  обзоры VR технологий и многое другое только у нас в любое время, ведь мы единственные кто первым узнает сегодняшние новости в современныом мире информационных технологий."
    
    }else if (screenWidth < 950){

        descriptionFour.style.lineHeight    = "1.4em";
        descriptionFourt.style.lineHeight   = "1.4em";
        descriptionFour.innerHTML       = "&emsp;Компьютерные технологии на сегодняшний день являются одним из важнейших частей жизни людей и если вы хотите оставаться в курсе последних событий, знать самые важные вещи из мира IT или следить за разработкой новейших технологий, то все это можно узнать на нашем сайте."
        descriptionFourt.innerHTML      = "&emsp;Читайте последние новости о компьютерных и информационных технологиях, анонсы,  обзоры VR технологий и многое другое только у нас в любое время, ведь мы единственные кто первым узнает сегодняшние новости в современныом мире информационных технологий."
    
    }
}else if (screenWidth < 900 && screenWidth > 600){

    descriptionOne.style.lineHeight     = "1.4em";
    descriptionOne.style.fontSize       = "22px";
    descriptionOne.innerHTML            = "&emsp;Узнайте на что способна одна из крупнейших сегментов современного развлечения. Познайте масштабы роста игровой индустрии, скорость ее роста на сегодняшнем рынке и степень ее внияния.";

    descriptionTwo.style.lineHeight     = "1.45em";
    descriptionTwo.style.fontSize       = "22px";
    descriptionTwo.innerHTML            = "&emsp;Эксклюзивные материалы по Dota2, последние новости по PUBG, прямые трансляции эксклюзивных турниров по CS:GO со всех концов мира и многое другое можно узнать у нас прямо сейчас.";

    descriptionThree.style.lineHeight   ="1.4em";
    descriptionThree.style.fontSize     ="22px";
    descriptionThree.innerHTML          = "&emsp;У нас вы узнаете всё о играх являющиеся самыми популярными. Самые свежие статьи, свежие обзоры, решение технических проблем, превью ожидаемых проектов и многое другое можно узнать прямо сейчас.";

    descriptionFour.style.lineHeight    = "1.4em";
    descriptionFour.style.fontSize      = "22px";
    descriptionFour.innerHTML           = "&emsp;Читайте последние новости о компьютерных и информационных технологиях, анонсы, обзоры VR технологий и многое другое, ведь мы первыми публикуем последние новости."

}else if (screenWidth <= 600){

    partitionOne.style.fontSize         = "18px";
    partitionTwo.style.fontSize         = "18px";
    partitionThree.style.fontSize       = "18px";
    partitionFour.style.fontSize        = "18px";

    descriptionOne.style.lineHeight     = "1.2em";
    descriptionOne.style.fontSize       = "18px";
    descriptionOne.innerHTML            = "&emsp;Узнайте на что способна одна из крупнейших сегментов современного развлечения. Познайте масштабы роста игровой индустрии, скорость ее роста на сегодняшнем рынке и степень ее внияния.";

    descriptionTwo.style.lineHeight     = "1.2em";
    descriptionTwo.style.fontSize       = "18px";
    descriptionTwo.innerHTML            = "&emsp;Эксклюзивные материалы по Dota2, последние новости по PUBG, прямые трансляции эксклюзивных турниров по CS:GO со всех концов мира и многое другое можно узнать у нас прямо сейчас.";

    descriptionThree.style.lineHeight   = "1.2em";
    descriptionThree.style.fontSize     = "18px";
    descriptionThree.innerHTML          = "&emsp;У нас вы узнаете всё о играх являющиеся самыми популярными. Самые свежие статьи, свежие обзоры, решение технических проблем, превью ожидаемых проектов и многое другое можно узнать прямо сейчас.";

    descriptionFour.style.lineHeight    = "1.2em";
    descriptionFour.style.fontSize      = "18px";
    descriptionFour.innerHTML           = "&emsp;Читайте последние новости о компьютерных и информационных технологиях, анонсы, обзоры VR технологий и многое другое, ведь мы первыми публикуем последние новости."

}

