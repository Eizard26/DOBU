
        
        
        
        
        let currentOverlay = null; // Keep track of the currently open overlay

        function toggleOverlay(card) {
            const overlay = card.querySelector('.overlay');
            
            // If another overlay is open, close it
            if (currentOverlay && currentOverlay !== overlay) {
                currentOverlay.style.display = 'none'; // Hide the previous overlay
            }
            
            // Toggle the clicked overlay
            overlay.style.display = overlay.style.display === 'none' ? 'flex' : 'none';
            
            // Update the currentOverlay reference
            currentOverlay = overlay.style.display === 'flex' ? overlay : null;
        }

        function showTooltip(card) {
            $(card).find('.tooltip').css({
                opacity: 1,
                visibility: 'visible'
            });
        }
        
        function hideTooltip(card) {
            $(card).find('.tooltip').css({
                opacity: 0,
                visibility: 'hidden'
            });
        }