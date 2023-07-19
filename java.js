function carregar() {
    var msg = window.document.getElementById('msg1')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    setInterval(carregar, 1000)
    msg2.innerHTML = `Horário agora: <b>${hora} horas</b>, <b>${minuto} minutos</b> e <b>${segundo} segundos</b>.`
    
     if (hora >= 0 && hora < 6) {
         msg1.innerHTML = '<p>TENHA UMA OTIMA MADRUGADA!</p>'
         img.src = 'boamadrugada.png'
         document.body.style.background = "#030f23"
     }
    
     else if (hora >= 6 && hora < 12) {
         msg1.innerHTML = '<p>BOM DIA!</p>'
         img.src = 'bomdia.png'
         document.body.style.background = "#bbc466"
     }
    
     else if (hora >= 12 && hora < 19) {
         msg1.innerHTML = '<p>BOA TARDE!</p>'
         img.src = 'boatarde.png'
         document.body.style.background = "#e0b265"
     }
     else {
         msg1.innerHTML = '<p>BOA NOITE!</p>'
         img.src = 'boanoite.png'
         document.body.style.background = "#091922"
    }
}
