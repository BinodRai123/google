


var arr = [
    {name: "rose", image: "rose.avif"},
    {name: "flower", image: "https://images.unsplash.com/photo-1557175894-aa36d3899f64?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "cat", image: "https://images.unsplash.com/photo-1589859609048-4cdf4437fbcc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "cat", image: "https://images.unsplash.com/photo-1589859609071-94151b1f2a04?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "leafe", image: "https://images.unsplash.com/photo-1572468323375-e50fd253252e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

function showthecard(){
    var carter = '';
    arr.forEach(function(obj){
        carter += ` <div class="box" id="one">
        <img src="${obj.image}" alt="image">
    </div>`;
    })
    
   document.querySelector(".photo").innerHTML = carter;
}
showthecard();

function searchfunction(){
    var input = document.querySelector("#input");

   input.addEventListener("focus",function(){
        document.querySelector(".hidden").style.display = "block";
    })

   input.addEventListener("blur", function(){
        document.querySelector(".hidden").style.display = "none";
    })

   input.addEventListener("input", function(){
        const filterdArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = ""
        filterdArray.forEach(function(obj){
            clutter += ` <div class="name-list">
            <h3 class="khoji">${obj.name}</h3>
        </div>`
        })
        
        document.querySelector(".product-names").style.display = "block";
        document.querySelector(".name-list").style.display = "block";
        document.querySelector(".product-names").innerHTML = clutter;
    })
}

searchfunction();
