document.getElementById('event-form').addEventListener('submit', addEvent);

function addEvent(e) {
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;

    if (eventName === '' || eventDate === '') {
        alert('Please fill in all fields');
        return;
    }

    const eventList = document.getElementById('event-list');

    const li = document.createElement('li');
    li.innerHTML = `<span>${eventName} - ${eventDate}</span> <button class="delete-btn">Delete</button>`;

    eventList.appendChild(li);

    // Clear form
    document.getElementById('event-name').value = '';
    document.getElementById('event-date').value = '';

    // Add delete functionality
    li.querySelector('.delete-btn').addEventListener('click', function() {
        eventList.removeChild(li);
    });
}
