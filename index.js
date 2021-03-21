let sortMeglobal; 
let arrayLengthglobal;
let symbolglobal;
function cardSort() {
    container.innerHTML = "";

    let arrayLength = document.getElementById("fnumber").value;  
     let sortMe = new Array();
     let i = 0;
     symbol = [];
     
     for(; i < arrayLength; i++) {
       
        sortMe[i] = Math.floor((Math.random()*13)+1);
        let symbolarray = ["&diams;", "&spades;", "&hearts;", "&clubs;"];
      
        let randomsymbol = Math.floor(Math.random() * symbolarray.length);
        symbol1 = symbolarray[randomsymbol]; 
        symbol.push(symbol1);
        
        let card = document.createElement("div");
        card.classList.add("card");
       //two symbol
        let p = document.createElement("span");
        p.innerHTML = symbol1;

        let r = document.createElement("span");
        r.innerHTML = symbol1;
        r.classList.add("downCard");
       //two number
        let n = document.createElement("span");
        n.innerHTML = sortMe[i];

        let l = document.createElement("span");
        l.innerHTML = sortMe[i];
        l.classList.add("downCard1");


        card.appendChild(p);
        card.appendChild(n);
        card.appendChild(l);
        card.appendChild(r);
        container.appendChild(card);
     } 
     
     
     console.log(sortMe) 
      sortMeglobal = sortMe;
      arrayLengthglobal = arrayLength;
}

///bubble

function cardSortbubble() {
    container1.innerHTML = "";
    let sortMe1 = sortMeglobal;
    let wall = sortMe1.length - 1; 
    while (wall > 0){
        let index = 0;
        while (index < wall) {
          if (sortMe1[index] > sortMe1[index + 1]) { 
            let aux = symbol[index]; 
            symbol[index] = symbol[index + 1];
            symbol[index + 1] = aux;
          }

          if (sortMe1[index] > sortMe1[index + 1]) { 
            let aux = sortMe1[index]; 
            sortMe1[index] = sortMe1[index + 1];
            sortMe1[index + 1] = aux;
          }
          index++;
        }
        wall--; 
    };    
    
    for(i=0; i < sortMe1.length; i++) {
        let sort = document.createElement("div");
        sort.classList.add("sort");
       
        let p = document.createElement("span");
        p.innerHTML = symbol[i];
        
        let r = document.createElement("span");
        r.innerHTML = symbol[i];
        r.classList.add("downCard");


        
        let n = document.createElement("span");
        n.innerHTML = sortMe1[i];

        let l = document.createElement("span");
        l.innerHTML = sortMe1[i];
        l.classList.add("downCard1");
        
        
        sort.appendChild(p);
        sort.appendChild(n);
        sort.appendChild(l);
        sort.appendChild(r);
        container1.appendChild(sort);
        console.log(sortMe1);
}
    };

