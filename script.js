const element = document.getElementById('hid');

const clickOnIt = document.getElementsByClassName('icon-share-container');

const arrow = document.getElementsByClassName('icon-share');


for(let i = 0; i < clickOnIt.length; i++)
{

    clickOnIt[i].addEventListener( 'click', function(){

        if(element.style.display === 'none')
        {
            element.style.display = 'flex';
            clickOnIt[0].style.backgroundColor = '#6d7f97';
            arrow[0].style.fill = '#fff';
        }
        else
        {
            element.style.display = 'none';
            clickOnIt[0].style.backgroundColor = '#ecf2f8';
            arrow[0].style.fill = '#6E8098';
        }

    });

    clickOnIt[i].addEventListener('keydown', event => {
		if (event.key === 'Enter') {

            if(element.style.display === 'none')
            {
                element.style.display = 'flex';
                clickOnIt[0].style.backgroundColor = '#6d7f97';
                arrow[0].style.fill = '#fff';
            }
            else
            {
                element.style.display = 'none';
                clickOnIt[0].style.backgroundColor = '#ecf2f8';
                arrow[0].style.fill = '#6E8098';
            }
			
		}
	});

}

element.style.display = 'none';