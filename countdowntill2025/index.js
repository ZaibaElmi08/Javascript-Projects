const targetDate = new Date('2025-01-01T00:00:00');

    function updateCountdown() {
      const remainingTime = targetDate - new Date();

      if (remainingTime <= 0) {
        // Handle case where target date is in the past
        document.getElementById('countdown').innerHTML = "Time's up!";
        return;
      }

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
  