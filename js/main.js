
let domain_details_arr = {
    server : ``,
    name : ``,
    registered : ``,
    created : 0,
    expires : 0,
    name_servers : []
};
const domain_results_sec = document.querySelector(`.results_section`);
const search_btn = document.querySelector(`.button`);
const domain_field = document.querySelector(`.search-field`);

// fetch("https://zozor54-whois-lookup-v1.p.rapidapi.com/?domain=www.humber.ca&format=json", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "c8ad9cbef7msh02ce88f81b3caebp1d6c5ejsna663c4baf122",
// 		"x-rapidapi-host": "zozor54-whois-lookup-v1.p.rapidapi.com"
// 	}
// })
// .then((response) => response.json())
// .then((response) => {
//     domain_details_arr['server'] = response[`server`]
//     domain_details_arr['name'] = response[`name`]
//     domain_details_arr['registered'] = response[`registered`]
//     domain_details_arr['created'] = response[`created`]
//     domain_details_arr['expires'] = response[`expires`]
//     domain_details_arr['name_servers'] = response[`nameserver`]
// 	console.log(domain_details_arr);

//     const domain_details = document.createElement(`ul`);
//     // domain_details.classList.add(``);
//     domain_details.innerHTML = `
//                     <li>
//                     Server :
//                     <span>${domain_details_arr['server']}</span>
//                     </li>
//                     <li>
//                     Domain Name :
//                     <span>${domain_details_arr['name']}</span>
//                     </li>
//                     <li>
//                     Registered : 
//                     <span>${domain_details_arr['registered']}</span>
//                     </li>
//                     <li>
//                     Created On :
//                     <span>${domain_details_arr['created']}</span>
//                     </li>
//                     <li>
//                     Expires On :
//                     <span>${domain_details_arr['expires']}</span>
//                     </li>
//                     <li>
//                     Name Severs :
//                     <span>${domain_details_arr['name_servers'][1]}</span>
//                     <span>${domain_details_arr['name_servers'][1]}</span>
//                     </li>
//     `
//     domain_results_sec.appendChild(domain_details)

// })
// .catch(err => {
// 	console.error(err);
// });






search_btn.addEventListener(`click`, (event)=>{
    console.log(`${d[`contacts`][`tech`][`name`]}`);
    domain_name = domain_field.value ;
    console.log(domain_name);
    event.preventDefault();
});

console.log(domain_results_sec)




