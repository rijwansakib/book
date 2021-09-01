//get input by onclick
const submit=()=>{
    const inputArea=document.getElementById('search-text')
    const searchText=inputArea.value;
    console.log(searchText);
    inputArea.value='';
//call api
const uri=`http://openlibrary.org/search.json?q=${searchText}`;
fetch(uri)
.then(res=>res.json())
.then(data=>displayData(data));
}
//display data from api
const displayData=(books)=>{
    const searchResult=document.getElementById('search-result');
    const searchcompair=document.getElementById('not-found');
    searchResult.textContent='';
    searchcompair.textContent='';
 // total search Result 
    const total=books.docs;
    const totalBook=total.length;
    const searchTotal=document.getElementById('total');
    searchTotal.textContent='';
    const p=document.createElement('p');
    p.innerHTML=`
        <h1>Total:${console.log(totalBook),totalBook}</h1>
    `;
    searchTotal.appendChild(p);
//search Compair
    if(books.numFound===0){
        searchcompair.textContent='';
        const div=document.createElement('div')
        div.innerHTML=`
        <h1>Not Found</h1>
        `;
        p.style.display='none';
        searchcompair.appendChild(div);
    }
    books.docs.forEach(book => {
    const div=document.createElement('div')
    div.classList.add('col');
// book cards
    div.innerHTML=`
    <div class="card h-100" >
        <div class="card-body">
            <img width="100px" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg " class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${book.title}</h4>
                <p class="card-title">Author Name: ${book.author_name}</p>
                <p class="card-title">Publisher: ${book.publisher}</p>
                <p class="card-title">First Publish: ${book.first_publish_year}</p>
            </div>
        </div>
        </div>
    </div>   
    `;
    searchResult.appendChild(div);       
   });
}

