let ele = document.getElementById("insert")


window.addEventListener('keydown', (e) => {

    console.log("event happened")

    ele.innerHTML = `
     <div class='color'>
        
<table>
  <tr>
    <th>code</th>
    <th>key</th>
    <th>keycode</th>
  </tr>
  <tr>
    <td>${e.code}</td>
    <td>${e.key == ' ' ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
  </tr>

</table>
 </div>
        `



})