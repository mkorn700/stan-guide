//button for group

document.getElementById('search-btn')

addEventListener('click', searchforgroup )

//group button clicked
function searchforgroup(){

    let Name =document.getElementById('group').value.toLowerCase()

//AESPA

    if (Name === 'aespa') { document.getElementById("group-info").innerHTML =
    `  <h2>AESPA</h2>
    
    <img src="pictures/aespa/group/aespa pink.avif" alt="aespa" />
     
    
    <p>aespa (에스파), stylized as æspa, is a 4 member South Korean girl group under SM Entertainment. The group consists of Karina, Giselle,  Winter and NingNing. They debuted on November 17, 2020 with the digital single “Black Mamba“. On June 2, 2022 it has been announced that aespa has signed with Warner Records for global promotions.</p> `;
        
   

}

//le sserafim

if (Name === 'le sserafim') { document.getElementById("group-info").innerHTML =
`  <h2>Le Sserafim</h2>

<img src="pictures/lessera/Le-Sserafim-2-683x1024.jpg" alt="LE SSERAFIM" />
 

<p>LE SSERAFIM (르세라핌) is a 5-member girl group under HYBE and Source Music. The members currently consist of Chaewon, Sakura, Yunjin, Kazuha, and Eunchae. LE SSERAFIM officially debuted on May 2, 2022 with their 1st mini album “FEARLESS”.</p> `;
}
 }
//MEMBERS


//button for member search

document.getElementById('member-button')

addEventListener('click', searchformember)

//function

function searchformember(){

let memberName  = document.getElementById('member-search').value.toLowerCase();

//ningning 

if (memberName === 'ningning'){ document.getElementById('member-info').innerHTML = 

    `<h2>NingNing</h2>
    
    <img src="pictures/aespa/ningning/ningning pink.jpg" alt="question" /> <p>Ningning (Korean: 닝닝; Chinese: 宁宁; Japanese: ニンニン) is a Chinese singer under SM Entertainment. She is the maknae of the girl group aespa. On September 19, 2016, Ningning was revealed</p>`
  
              
  

}
//karina
else if (memberName === 'karina'){ document.getElementById('member-info').innerHTML = 

`<h2>Karina</h2>

<img src="pictures/aespa/karina/karina.jpg" alt="karina from aespa" />
<p>Karina (Korean: 카리나; Japanese: カリナ) is a South Korean singer and rapper under SM Entertainment. She is the leader of the girl group aespa and a member of the female unit GOT the beat.</p>`
}
//giselle

else if (memberName ===  'giselle'){ document.getElementById('member-info').innerHTML = 

`<h2>Giselle</h2>

<img src="pictures/aespa/giselle/giselle.webp" alt="giselle from aespa" />
<p>Giselle (Korean: 지젤; Japanese: ジゼル) is a Japanese-Korean rapper and singer under SM Entertainment. She is a member of the girl group aespa.</p>`
}

//winter
else if(memberName === 'winter'){ document.getElementById('member-info').innerHTML = 

`<h2>winter</h2>

<img src="pictures/aespa/winter/winter.jpg" alt="winter from aespa" />
<p>Winter (Korean: 윈터; Japanese: ウィンター) is a South Korean singer under SM Entertainment. She is a member of the girl group aespa and the maknae of the female unit GOT the beat.</p>`
}

//LE SSERAFIM

//chaewon

 if(memberName === 'chaewon'){ document.getElementById('member-info').innerHTML = 

`<h2>chaewon</h2>

<img src="pictures/lessera/chaewon/LE_SSERAFIM_Kim_Chaewon_Fearless_Japanese_single_concept_photo_2.jpg" alt="winter from aespa" />
<p>Kim Chaewon (김채원; or simply Chaewon) is a South Korean singer-songwriter under Source Music. She is the leader of the girl group LE SSERAFIM and a former member of the project girl group IZ*ONE.
</p>`
 }
 //kkura
else if(memberName === 'sakura'){ document.getElementById('member-info').innerHTML = 

`<h2>sakura</h2>

<img src="pictures/lessera/sakura/FPbY8x8VcA0PZhD.jpg" alt="winter from aespa" />
<p>Sakura (Korean: 사쿠라; Japanese: 咲良/サクラ) is a Japanese singer-songwriter, actress and model under Source Music and A.M. Entertainment. She is a member of the girl group LE SSERAFIM and a former member of the project girl group IZ*ONE and the Japanese idol girl groups HKT48 and AKB48.
</p>`

}

}

