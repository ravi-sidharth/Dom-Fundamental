const insert = document.querySelector('#insert')

window.addEventListener("keydown",(e)=>{
    insert.innerHTML = `<div class="color">
        <table border="blue" padding="1em">
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key ===" "? "space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>  
  </tr>
    
</table>

    </div>
`
})