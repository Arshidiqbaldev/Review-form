

async function getData() {

    const url = 'https://jsonplaceholder.typicode.com/posts'

    let response = await fetch(url);

    let data = await response.json();

    console.log(data);

}

getData();


async function postData() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
            title:"im title",
            userId: 5,
            body:"im the body",
            id: 0,
            
                })
    });

    let data = await response.json();

    console.log(data);

}

postData();