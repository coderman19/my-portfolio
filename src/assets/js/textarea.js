const textArea = document.querySelectorAll('[data-autoresize]')

textArea.forEach(item => {
    item.addEventListener('input', Event => {
        let $this = Event.target

        $this.style.height = '30px'
        $this.style.height = $this.scrollHeight + 'px'

    })
})