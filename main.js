async function main(){
    const response = await fetch('https://example.com');
    const data = await response.text();

    console.log(data);
}

main();