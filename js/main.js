
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
const domain_available_cont = document.createElement(`article`)
const try_another_btn_div = document.querySelector(`.try_another_btn_div`)
domain_available_cont.classList.add(`domain_available_cont`)





search_btn.addEventListener(`click`, (event)=>{

    const search_section = document.querySelector(`.search_section`)
    const welcome_section = document.querySelector(`.welcome_section`);
    welcome_section.classList.add(`disapear`)
    search_section.classList.add(`disapear`)

    let domain = domain_field.value ;
    console.log(domain);
    console.log(search_section);

        fetch(`https://zozor54-whois-lookup-v1.p.rapidapi.com/?domain=${domain}&format=json`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c8ad9cbef7msh02ce88f81b3caebp1d6c5ejsna663c4baf122",
            "x-rapidapi-host": "zozor54-whois-lookup-v1.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
    .then((response) => {
        domain_details_arr['server'] = response[`server`]
        domain_details_arr['name'] = response[`name`]
        domain_details_arr['registered'] = response[`registered`]
        domain_details_arr['created'] = response[`created`]
        domain_details_arr['expires'] = response[`expires`]
        domain_details_arr['name_servers'] = response[`nameserver`]
        if (domain_details_arr['created']) {

// ======================== Domain name Not Available Template ======================
            const domain_details = document.createElement(`ul`);
            domain_details.classList.add(`domain_taken`)
            // domain_details.classList.add(``);
            domain_details.innerHTML = `
                            <div class="taken_msg"><img src="img/remove.png" alt="Sucess Image" class="success_image"> <h1> Sorry this domain name is already taken</h1></div>
                            <li>
                            Server :
                            <span>${domain_details_arr['server']}</span>
                            </li>
                            <li>
                            Domain Name :
                            <span>${domain_details_arr['name']}</span>
                            </li>
                            <li>
                            Registered : 
                            <span>${domain_details_arr['registered']}</span>
                            </li>
                            <li>
                            Created On :
                            <span>${domain_details_arr['created']}</span>
                            </li>
                            <li>
                            Expires On :
                            <span>${domain_details_arr['expires']}</span>
                            </li>
                            <li>
                            Name Severs :
                            <span>${domain_details_arr['name_servers'][1]}</span>
                            <span>${domain_details_arr['name_servers'][1]}</span>
                            </li>
            `
            domain_results_sec.appendChild(domain_details)
        } else {

 // ======================== Domain name Available Template ======================
            const msg_content = document.createElement(`div`)
            msg_content.classList.add(`message_contain`)            
            msg_content.innerHTML = `
                        <img src="img/check.png" alt="Sucess Image" class="success_image">
                        <h2>The Domain Is Available for purchase</h2>
                        <h1>You can purchase it from the following sites below</h1>
                        <ol class="domain_sites">
                            <span><img src="img/tick.png" alt="domain sites" class="site_tick"><li><a href="https://www.bluehost.com/track/camazontech" class="domain_site">BLUEHOST.COM</a></li></span><br/><br/>
                            <span><img src="img/tick.png" alt="domain sites" class="site_tick"> <li><a href="https://ca.godaddy.com/" class="domain_site">GODADDY.COM</a></li></span>
                        </ol>
                    `

            const donate_box = document.createElement(`aside`)
            donate_box.classList.add(`donate_box`)
            donate_box.innerHTML = `
                        <img src="img/clipart4229070.png" alt="donate Image" class="donate_image">
                        <img src="img/please-networks-sl-barcelona-tech-city-png-please-1969_411.png" alt="donate Image" class="donate_image">
                        <form action="https://www.paypal.com/donate" method="post" target="_top" class="donate_form">
                            <input type="hidden" name="hosted_button_id" value="XZ4Y298APS9QG" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <!-- <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" /> -->
                        </form>
                    `

            domain_available_cont.appendChild(msg_content)
            domain_available_cont.appendChild(donate_box)
            domain_results_sec.appendChild(domain_available_cont)
        }

    })
    .catch(err => {
        console.error(err);
    });
    try_another_btn_div.classList.remove(`disapear`)
    event.preventDefault();
});

try_another_btn_div.addEventListener(`click`, (event) =>{
    location.reload();
})




