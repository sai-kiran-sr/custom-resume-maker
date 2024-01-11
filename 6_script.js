function addNewWEField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter');
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter');
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
function addNewskField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute('placeholder','Enter');
    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");
    skOb.insertBefore(newNode, skAddButtonOb);
}

function addNewlaField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('laField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute('placeholder','Enter');
    let laOb=document.getElementById("la");
    let laAddButtonOb=document.getElementById("laAddButton");
    laOb.insertBefore(newNode, laAddButtonOb);
}

function addNewedField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('edField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute('placeholder','Enter');
    let edOb=document.getElementById("ed");
    let edAddButtonOb=document.getElementById("edAddButton");
    edOb.insertBefore(newNode, edAddButtonOb);
}

function addNewproField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('proField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute('placeholder','Enter');
    let proOb=document.getElementById("pro");
    let proAddButtonOb=document.getElementById("proAddButton");
    proOb.insertBefore(newNode, proAddButtonOb);
}
function addNewintField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('intField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute('placeholder','Enter');
    let intOb=document.getElementById("int");
    let intAddButtonOb=document.getElementById("intAddButton");
    intOb.insertBefore(newNode, intAddButtonOb);
}

function addNewachField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('achField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute('placeholder','Enter');
    let achOb=document.getElementById("ach");
    let achAddButtonOb=document.getElementById("achAddButton");
    achOb.insertBefore(newNode, achAddButtonOb);
}

//generating resume
function generateCV(){
    console.log("generating cv")
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById(
        "contactField").value;
    document.getElementById("mailT").innerHTML=document.getElementById(
        "mailidField").value;
    document.getElementById("bdayT").innerHTML=document.getElementById(
        "bdayField").value;
    document.getElementById("addressT").innerHTML=document.getElementById(
        "addressField").value;
    document.getElementById("fbT").innerHTML=document.getElementById(
        "fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById(
        "instaField").value;
    document.getElementById("LinkedT").innerHTML=document.getElementById(
        "LinkedField").value;
    document.getElementById('objectiveT').innerHTML = document.getElementById(
        "objectiveField").value;
    document.getElementById('schoolnameT').innerHTML = document.getElementById(
            "schoolname").value;
    document.getElementById('passoutT').innerHTML = document.getElementById(
                "passout").value;
    document.getElementById('percentageT').innerHTML = document.getElementById(
                "percentage").value;
    document.getElementById('collegenameT').innerHTML = document.getElementById(
                "collegename").value;
    document.getElementById('passout1T').innerHTML = document.getElementById(
                "passout1").value;
    document.getElementById('percentage1T').innerHTML = document.getElementById(
                "percentage1").value;
    document.getElementById('ugnameT').innerHTML = document.getElementById(
        "ugname").value;
    document.getElementById('ugclgnameT').innerHTML = document.getElementById(
        "ugclgname").value;
    document.getElementById('universitynameT').innerHTML = document.getElementById(
         "universityname").value;
    document.getElementById('passout2T').innerHTML = document.getElementById(
         "passout2").value;
    document.getElementById('percentage2T').innerHTML = document.getElementById(
         "percentage2").value;
    
    
    let wes=document.getElementsByClassName('weField')
    let str=''
    for ( let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    let aqs=document.getElementsByClassName('eqField')
    let str1=''
    for(let e of aqs){
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;
    let sks=document.getElementsByClassName('skField')
    let str2=''
    for ( let e of sks)
    {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML=str2;

    let las=document.getElementsByClassName('laField')
    let str3=''
    for ( let e of las)
    {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("laT").innerHTML=str3;

    
    let pros=document.getElementsByClassName('proField')
    let str5=''
    for ( let e of pros)
    {
        str5 = str5 + `<li> ${e.value} </li>`;
    }
    document.getElementById("proT").innerHTML=str5;

    let ints=document.getElementsByClassName('intField')
    let str6=''
    for ( let e of ints)
    {
        str6 = str6 + `<li> ${e.value} </li>`;
    }
    document.getElementById("intT").innerHTML=str6;

    let achs=document.getElementsByClassName('achField')
    let str7=''
    for ( let e of achs)
    {
        str7 = str7 + `<li> ${e.value} </li>`;
    }
    document.getElementById("achT").innerHTML=str7;

    
    
    let file=document.getElementById('imgField').files[0]
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
    document.getElementById('imgTemplate').src=reader.result;
};
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}
function printCV(){
    window.print();
}