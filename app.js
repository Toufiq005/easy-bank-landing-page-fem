// =========NavModal=======
const navModal = document.getElementById('navModal');

function getModal() {
    if (navModal.classList.contains('hidden')) {
        navModal.classList.remove('hidden')
        navModal.classList.add('flex')
    }
    else {
        navModal.classList.remove('flex')
        navModal.classList.add('hidden')
    }
}