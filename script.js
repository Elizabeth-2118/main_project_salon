const menuItems = document.querySelectorAll('.sidebar li');

menuItems.forEach(item => {
    item.addEventListener('click', function () {

        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        const menu = this.textContent.trim();

        if(menu.includes('Dashboard')){
            document.querySelector('h1').innerText='Dashboard';
        }

        if(menu.includes('Services')){
            document.querySelector('h1').innerText='Services';
        }

        if(menu.includes('Staff')){
            document.querySelector('h1').innerText='Staff';
        }

        if(menu.includes('Bookings')){
            document.querySelector('h1').innerText='Bookings';
        }

        if(menu.includes('Customers')){
            document.querySelector('h1').innerText='Customers';
        }

        if(menu.includes('Reviews')){
            document.querySelector('h1').innerText='Reviews';
        }

        if(menu.includes('Reports')){
            document.querySelector('h1').innerText='Reports';
        }

        if(menu.includes('Settings')){
            document.querySelector('h1').innerText='Settings';
        }

        if(menu.includes('Logout')){
            if(confirm("Logout?")){
                location.reload();
            }
        }

    });
});


const addBtn = document.querySelector('button');

addBtn.addEventListener('click', function(){

    const serviceName =
    document.querySelector('input[type="text"]').value;

    const category =
    document.querySelector('select').value;

    const price =
    document.querySelector('input[type="number"]').value;

    const description =
    document.querySelector('textarea').value;

    if(
        serviceName==='' ||
        category==='Select Category' ||
        price==='' ||
        description===''
    ){
        alert('Fill all fields');
        return;
    }

    const services =
    document.querySelector('.services');

    const card =
    document.createElement('div');

    card.className='service-card';

    card.innerHTML=`
        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9">
        <h3>${serviceName}</h3>
        <p>$${price}</p>
    `;

    services.appendChild(card);

    alert('Service Added Successfully');

    document.querySelector('input[type="text"]').value='';
    document.querySelector('input[type="number"]').value='';
    document.querySelector('textarea').value='';
    document.querySelector('select').selectedIndex=0;
});