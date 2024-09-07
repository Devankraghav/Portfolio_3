alert("Hello there! Thanks for dropping by. I hope you find a little magic in our corners.")
window.onscroll = function()
{
    if(pageYOffset >= 1)
    {
        document.getElementById('arrow').style.visibility="visible"
    }else
    {
        document.getElementById('arrow').style.visibility="hidden";
    }
};