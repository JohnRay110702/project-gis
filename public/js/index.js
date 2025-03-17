

// Define TimestampConverter in the global scope
window.TimestampConverter = {
    // Function to convert Firestore timestamp to JavaScript Date object
    convertFirestoreTimestamp: function(timestamp) {
        return timestamp.toDate();
    },
    // Function to convert Realtime Database timestamp string to JavaScript Date object
    convertRTDBTimestamp: function(timestampString) {
        return new Date(timestampString.replace(' at', ''));
    }
};


// Function to show only the dashboard content
function showDashboardContent() {
    // Hide all content sections except dashboardContent
    contentSections.forEach(section => {
        if (section.id === 'dashboardContent') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    // Scroll to the top of the middle container
    const middleContainer = document.querySelector('.middle');
    if (middleContainer) {
        middleContainer.scrollTop = 0;
    }
}

// Show only dashboard content when page reloads
window.addEventListener('load', () => {
    showDashboardContent();
});

// Additional JavaScript code...
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const contentSections = document.querySelectorAll('.content-section');

sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Hide all content sections
        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        // Get the target content section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Display the target content section
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // Scroll to the top of the middle container
        const middleContainer = document.querySelector('.middle');
        if (middleContainer) {
            middleContainer.scrollTop = 0;
        }
    });
});

var datePicker
//============== DATE =================//


document.addEventListener("DOMContentLoaded", function () {
    
    datePicker = flatpickr("#datePicker", {
        dateFormat: "F j, Y",
        altInput: true,
        altFormat: "F j, Y",
        defaultDate: "Select Date",
        onChange: function (selectedDates, dateStr, instance) {
            var selectedDate = selectedDates[0];
            displayDataForDate(selectedDate);
        }
    });

    setTimeout(removeLoader, 5000)
    var mergedData = [];
    createChart(mergedData);


    //============== MAP PICKER =================//
    var sidebarLinks = document.querySelectorAll(".sidebar-link");
    sidebarLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            sidebarLinks.forEach(function (l) {
                l.classList.remove("active");
            });
            link.classList.add("active");
        });
    });
    
//     var map = L.map('map').setView([13.75, 120.95], 10); // Set the initial view to cover Batangas
//     var batangasBounds = L.latLngBounds([13.2, 119.5], [14.2, 122.0]); // Adjust the bounds to cover a larger area for the entire province
//     map.setMaxBounds(batangasBounds);
//     map.on('drag', function () {
//         map.panInsideBounds(batangasBounds, { animate: false });
//     });
//     L.tileLayer('https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=af13559acdd84323962af4cafc51d063').addTo(map);

//     var marker;


//     // Event listener for clicking on the map
//     function handleMapClick(e) {
//         // Remove the existing marker if present
//         if (marker) {
//             map.removeLayer(marker);
//         }

//         // Add a new marker at the clicked location
//         marker = L.marker(e.latlng).addTo(map);

//         // Update latitude and longitude input fields
//         document.getElementById('latitudeInput').value = e.latlng.lat.toFixed(6);
//         document.getElementById('longitudeInput').value = e.latlng.lng.toFixed(6);
        
//         // Reverse geocoding to get the location name
//         reverseGeocode(e.latlng);
        
//         function reverseGeocode(latlng) {
//             // Use a geocoding service to get location details
//             fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     // Update the search location input field with the location name
//                     document.getElementById('locationSearchInput').value = data.display_name;
//                 })
//                 // .catch(error => console.error('Error fetching location details:', error));
//         }
//     }

//     map.on('click', handleMapClick);
  

//      // Event listener for clicking the search location button
//      document.getElementById('searchLocation').addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent default form submission behavior
//      // Retrieve latitude and longitude from input fields
//     var latitude = parseFloat(document.getElementById('latitudeInput').value);
//     var longitude = parseFloat(document.getElementById('longitudeInput').value);

//     // Check if latitude and longitude are valid numbers
//     if (!isNaN(latitude) && !isNaN(longitude)) {
//         // Set map view to the specified coordinates
//         map.setView([latitude, longitude], 30); // 10 is the zoom level, you can adjust it as needed
//     } else {
//         // Handle invalid input (e.g., show an error message)
//         // console.error('Invalid latitude or longitude input');
//     }   
//  });

 
 
//============== ADD BUTTON =================//
 // Add event listener for 'addBtn' element

 document.getElementById('addBtn').addEventListener('click', function (event) {
    // Get rainfall value from input
    event.preventDefault(); // Prevent default form submission behavior
    const rainfallInput = document.getElementById('rainfallInput');
    const rainfallValue = parseFloat(rainfallInput.value);

    // Get selected date from input
    const selectedDate = new Date(document.getElementById('PickerDate').value);

    // Get selected time from input
    const selectedTime = document.getElementById('timeInput').value;
    const [hours, minutes] = selectedTime.split(':');

    // Check if the selected time is PM and adjust hours accordingly
    let adjustedHours = parseInt(hours);
    if (selectedTime.toLowerCase().includes('pm')) {
        adjustedHours = (adjustedHours % 12) + 12; // Convert to 24-hour format
    }

    selectedDate.setHours(adjustedHours, parseInt(minutes)); // Set selected time

    // Get location name, latitude, and longitude from input fields
    const locationName = document.getElementById('locationSearchInput').value;
    const latitudeInput = document.getElementById('latitudeInput');
    const longitudeInput = document.getElementById('longitudeInput');
    const latitude = parseFloat(latitudeInput.value);
    const longitude = parseFloat(longitudeInput.value);

        // Check if any of the required fields are empty
    if (isNaN(rainfallValue) || !rainfallInput.value.trim()) {
        Swal.fire({
            icon: 'error',
            title: 'Please enter a valid rainfall value.',
            confirmButtonText: 'OK'
        });
        rainfallInput.focus();
        return; // Exit the function early if rainfall value is not a number or empty
    }

    if (!selectedDate || isNaN(selectedDate.getTime())) {
        Swal.fire({
            icon: 'error',
            title: 'Please select a valid date and time.',
            confirmButtonText: 'OK'
        });
        return; // Exit the function early if date is empty or not valid
    }
    if (!locationName.trim() || !latitude || isNaN(latitude) || !longitude || isNaN(longitude)) {
        Swal.fire({
            icon: 'error',
            title: 'Please enter a valid location.',
            confirmButtonText: 'OK'
        });
        document.getElementById('locationSearchInput').focus();
        return; // Exit the function early if location details are incomplete
    }

    // Add data to Firestore with date and time
    addRainfallData(locationName, latitude, longitude, rainfallValue, selectedDate);
});

// Attach click event listener to delete button
document.getElementById('deleteBtn').addEventListener('click', async function() {
    try {
        // Query Firestore to retrieve all documents from the collection
        const querySnapshot = await getDocs(collection(db, 'rainfall'));

        // Check if there are any documents in the collection
        if (!querySnapshot.empty) {
            // Extract data from the query snapshot
            const documents = querySnapshot.docs.map(doc => doc.data());

            // Create an array of strings representing each document's data
            const documentStrings = documents.map((data, index) => {
                // Remove "Calabarzon, 4207, Philippines" from the locationName
                const locationNameSnippet = data.locationName.replace(/, Calabarzon, 4207, Philippines$/, '');
            
                // Construct the string for the document entry
                return `${index + 1}. ${locationNameSnippet}, Rainfall Value: ${data.rainfallValue}`;
            });

            // Show Swal message with a dropdown containing the document data
            const { value: documentIndex } = await Swal.fire({
                title: 'Select data to delete',
                input: 'select',
                inputOptions: documentStrings,
                inputPlaceholder: 'Select data',
                showCancelButton: true,
                inputValidator: (value) => {
                    return new Promise((resolve) => {
                        if (value !== '') {
                            resolve();
                        } else {
                            resolve('You need to select data to delete');
                        }
                    });
                },
                customClass: {
                    input: 'small-dropdown', // Define a custom class for the input dropdown
                },
                width: '50%', // Set the width of the Swal message
            });

            // If the user selects a document and confirms deletion
            if (documentIndex !== undefined) {
                const documentToDelete = querySnapshot.docs[documentIndex]; // Get the document to delete
                await deleteDoc(documentToDelete.ref); // Delete the document from Firestore
                Swal.fire('Success', 'Data deleted successfully', 'success'); // Show success message
            }
        } else {
            // Show error message if no documents are found in the collection
            Swal.fire('Error', 'No data found to delete', 'error');
        }
    } catch (error) {
        // Show error message if an error occurs during the deletion process
        Swal.fire('Error', 'Failed to delete data: ' + error.message, 'error');
    }
});

document.getElementById('updateBtn').addEventListener('click', async function() {
    try {
        // Query Firestore to retrieve all documents from the collection
        const querySnapshot = await getDocs(collection(db, 'rainfall'));

        // Check if there are any documents in the collection
        if (!querySnapshot.empty) {
            // Extract data from the query snapshot
            const documents = querySnapshot.docs.map(doc => doc.data());
            
            // Create an array of strings representing each document's data
            const documentStrings = documents.map((data, index) => {
                const locationNameSnippet = data.locationName.replace(/, Calabarzon, 4207, Philippines$/, '');
            
                // Construct the string for the document entry
                return `${index + 1}. ${locationNameSnippet}, Rainfall Value: ${data.rainfallValue}`;
            });

            // Show Swal message with a dropdown containing the document data
            const { value: documentIndex } = await Swal.fire({
                title: 'Select data to update',
                input: 'select',
                inputOptions: documentStrings,
                inputPlaceholder: 'Select data',
                showCancelButton: true,
                inputValidator: (value) => {
                    return new Promise((resolve) => {
                        if (value !== '') {
                            resolve();
                        } else {
                            resolve('You need to select data to update');
                        }
                    });
                },
                customClass: {
                    input: 'small-dropdown', // Define a custom class for the input dropdown
                    popup: 'custom-swal-popup'
                },
                width: '50%', // Set the width of the Swal message
            });

            // If the user selects a document to update
            if (documentIndex !== undefined) {
                // Get the selected document data
                const selectedDocument = documents[documentIndex];
                
                // Show a Swal prompt for updating the data
                const { value: updatedValues } = await Swal.fire({
                    title: `Update Data for ${selectedDocument.locationName}`,
                    html:
                        `<input id="locationName" class="swal2-input" placeholder="Location Name" value="${selectedDocument.locationName}">` +
                        `<input id="latitude" class="swal2-input" placeholder="Latitude" value="${selectedDocument.latitude}">` +
                        `<input id="longitude" class="swal2-input" placeholder="Longitude" value="${selectedDocument.longitude}">` +
                        `<input id="date" class="swal2-input" type="date" placeholder="Date" value="${selectedDocument.timestamp.toDate().toISOString().split('T')[0]}">` +
                        `<input id="time" class="swal2-input" type="time" placeholder="Time" value="${selectedDocument.timestamp.toDate().toLocaleTimeString()}">` +
                        `<input id="rainfallValue" class="swal2-input" type="number" placeholder="Rainfall Value" value="${selectedDocument.rainfallValue}">`,
                    showCancelButton: true,
                    focusConfirm: false,
                    preConfirm: () => {
                        return [
                            document.getElementById('locationName').value,
                            document.getElementById('latitude').value,
                            document.getElementById('longitude').value,
                            document.getElementById('date').value,
                            document.getElementById('time').value,
                            document.getElementById('rainfallValue').value
                        ];
                    }
                });

                // If the user provides valid new values and confirms
                if (updatedValues !== undefined) {
                    const [newLocationName, newLatitude, newLongitude, newDate, newTime, newRainfallValue] = updatedValues;
                    
                    // Update the document in Firestore with the new values
                    await updateDoc(doc(collection(db, 'rainfall'), querySnapshot.docs[documentIndex].id), {
                        locationName: newLocationName,
                        latitude: newLatitude,
                        longitude: newLongitude,
                        timestamp: new Date(newDate + ' ' + newTime),
                        rainfallValue: newRainfallValue
                    });
                    Swal.fire('Success', 'Data updated successfully', 'success'); // Show success message
                }
            }
        } else {
            // Show error message if no documents are found in the collection
            Swal.fire('Error', 'No data found to update', 'error');
        }
    } catch (error) {
        // Show error message if an error occurs during the updating process
        Swal.fire('Error', 'Failed to update data: ' + error.message, 'error');
    }
});

// Function to add rainfall data with date without time
const addRainfallData = async (locationName, latitude, longitude, rainfallValue, selectedDate) => {
    try {
        // Add a new document with data to the "rainfall" collection
        await addDoc(collection(db, "rainfall"), {
            locationName: locationName,
            latitude: latitude,
            longitude: longitude,
            rainfallValue: rainfallValue,
            timestamp: selectedDate // Use selected date without time
        });
        
        // Display success alert
        Swal.fire({
            icon: 'success',
            title: 'Rainfall data added successfully!',
            confirmButtonText: 'OK'
        }).then(() => {
            // Reload the page after successful addition of data
            location.reload();
        });
        
        } catch (error) {
        // Handle error
        // console.error("Error adding rainfall data: ", error);
        }
    };
    
});

//============== FETCH AND MERGE DATA =================//

// Define the fetchDataAndMergeAndUpdateDOM function
async function fetchDataAndMergeAndUpdateDOM() {
    try {
       // Function to fetch data from Firestore for rainfall collection
        async function fetchDataFromFirestore() {
            try {
                // Reference to the "rainfall" collection
                const rainfallCollectionRef = collection(db, "rainfall");
                // Get all documents in the "rainfall" collection
                const querySnapshot = await getDocs(rainfallCollectionRef);
                // Array to store fetched data
                const data = [];
                // Iterate through each document
                querySnapshot.forEach((doc) => {
                    // Extract data from each document
                    const docData = doc.data();
                    // Convert Firestore timestamp to JavaScript Date object
                    const parsedTimestamp = TimestampConverter.convertFirestoreTimestamp(docData.timestamp);
                    // Format timestamp to match the desired format
                    const formattedTimestamp = parsedTimestamp.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }) + " UTC+8";
                    // Create a new object with the formatted timestamp
                    const newData = {
                        latitude: docData.latitude,
                        locationName: docData.locationName,
                        longitude: docData.longitude,
                        parsedTimestamp: parsedTimestamp,
                        rainfallValue: docData.rainfallValue,
                        rssi: docData.rssi,
                        timestamp: formattedTimestamp
                    };
                    // Push the new object to the data array
                    data.push(newData);
                });
                // Return the fetched data
                return data;
            } catch (error) {
                // console.error("Error fetching data from Firestore:", error);
                throw error;
            }
        }


        // Function to fetch data from Realtime Database and convert to array for a specific rain gauge
        async function fetchDataFromRealtimeDatabaseToArray(rainGaugeName) {
            try {
                // Reference to the data in the database for the specified rain gauge
                const dataRef = ref(customDBVariable, rainGaugeName);
                // Get the data
                const snapshot = await get(dataRef);
                // Check if data exists
                if (snapshot.exists()) {
                    const dataObj = snapshot.val();
                    // Convert object to array of objects
                    const dataArray = Object.values(dataObj);
                    return dataArray;
                } else {
                    // console.log("No data available for " + rainGaugeName);
                    return [];
                }
            } catch (error) {
                // console.error('Error fetching data from Realtime Database:', error);
                throw error;
            }
        }

        // Merge function to combine data from Realtime Database and Firestore
        async function mergeData() {
            try {
                // Fetch data from Realtime Database for all rain gauges
                const rtdbDataArrays = await Promise.all([
                    fetchDataFromRealtimeDatabaseToArray('Rain Gauge 1'),
                    fetchDataFromRealtimeDatabaseToArray('Rain Gauge 2'),
                    fetchDataFromRealtimeDatabaseToArray('Rain Gauge 3'),
                    fetchDataFromRealtimeDatabaseToArray('Rain Gauge 4'),
                ]);

                // Fetch data from Firestore
                const firestoreDataArray = await fetchDataFromFirestore();

                // Combine the arrays
                const mergedData = [...firestoreDataArray];

                // Merge data from all rain gauges
                rtdbDataArrays.forEach((dataArray) => {
                    mergedData.push(...dataArray);
                });

                return mergedData;
            } catch (error) {
                
                throw error;
            }
        }
        
         const mergedData = await mergeData();

        

        updateUIWithLatestData(mergedData);
        createChart(mergedData);
        updateRightContainer(mergedData);
        MonitorRain();
        refreshChart();
        setTimeout(checkRainfallAndDisplayPopUp(mergedData), 1 * 60 * 1000);
    } catch (error) {
        // console.error("Error:", error);
    }
}


// Call the fetchDataAndMergeAndUpdateDOM function after initializing Flatpickr
fetchDataAndMergeAndUpdateDOM();



//============== UPDATE DISPLAY IN RAINFALL & LOCATION =================//

// Function to fetch the latest data from MySQL via getVolume.php
// async function fetchLatestData() {
//     const url = `/public/php/getVolume.php?tributary=${encodeURIComponent(tributary)}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         console.log("Fetched Data:", data); // Debugging line

//         if (!data || data.error) {
//             console.error("No valid latest data found:", data.error);
//             return;
//         }

//         updateUIWithLatestData(data);
//     } catch (error) {
//         console.error("Error fetching latest data:", error);
//     }
// }


// // Function to update the UI with the latest data
// function updateUIWithLatestData(data) {
//     // Assuming 'data' is an array of objects sorted by timestamp
//     const latestData = data[data.length - 1]; // Get the latest entry

//     if (!latestData) {
//         console.error("No valid latest data found.");
//         return;
//     }

//     // Update the UI elements
//     const rainfallResultText = document.getElementById('rainfallResultText');
//     const locationResultText = document.getElementById('locationResultText');

//     if (rainfallResultText && locationResultText) {
//         rainfallResultText.textContent = `${latestData.volume} mm`;
//         locationResultText.textContent = latestData.tributary;
//     } else {
//         console.warn("One or both of the HTML elements not found.");
//     }
// }

// // Call fetchLatestData() at regular intervals (e.g., every 5 seconds)
// setInterval(fetchLatestData, 5000);

// // Initial call to load data when the page loads
// fetchLatestData();


// // Call the fetchDataAndMergeAndUpdateDOM function initially
// fetchDataAndMergeAndUpdateDOM();

// // // Call the fetchDataAndMergeAndUpdateDOM function after initializing Flatpickr
setInterval(fetchDataAndMergeAndUpdateDOM, 60000); // Update every 1 minute (adjust as needed)


// //============== CHART DISPLAY IN DASHBOARD =================//
// Function to create the chart using merged data
function createChart(mergedData) {
    var chartCanvas = document.getElementById('chart');

    if (mergedData && window.Chart && chartCanvas) {
        // Clear the canvas before creating the chart
        var ctx = chartCanvas.getContext('2d');
        ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

        // Check if there's an existing chart instance
        if (window.myChart) {
            window.myChart.destroy();
        }

        // Ensure that each entry in mergedData has the parsedTimestamp property properly set
        mergedData.forEach(entry => {
            // Check if the entry has a timestamp field and it's not already a Date object
            if (entry.timestamp && !(entry.timestamp instanceof Date)) {
                // Convert the timestamp to a JavaScript Date object using TimestampConverter
                if (typeof entry.timestamp.toDate === 'function') {
                    // Firestore timestamp
                    entry.parsedTimestamp = TimestampConverter.convertFirestoreTimestamp(entry.timestamp);
                } else {
                    // Realtime Database timestamp
                    entry.parsedTimestamp = TimestampConverter.convertRTDBTimestamp(entry.timestamp);
                }
            }
        });

        // Sort the merged data by parsedTimestamp in ascending order
        mergedData.sort((a, b) => a.parsedTimestamp - b.parsedTimestamp);
        // console.log('MergeData', mergedData)

        // Initialize arrays to store timestamp labels and rainfall data
        var labelsArray = [];
        var rainfallDataArray = [];
        var label = [];
        var datestring = new Date()
        // Process each entry in mergedData
        mergedData.forEach(entry => {
          if (entry.rainfallValue != "0" && entry.rainfallValue != 0) {
            if ((formatDateString((entry.parsedTimestamp).toLocaleString())).includes(formatDateString(datestring))){
            // Extract parsedTimestamp, locationName, and rainfallValue from each entry
            var parsedTimestamp = entry.parsedTimestamp;
            var locationName = entry.locationName;
            var rainfallValue = entry.rainfallValue;
            
            // Format parsedTimestamp to display in the chart (adjust this part as needed)
            var formattedTimestamp = parsedTimestamp ? parsedTimestamp.toLocaleString() : 'Unknown';
            
            // Add timestamp label and rainfall data to respective arrays
              labelsArray.push(`${entry.rainfallValue} mm\n${formattedTimestamp}\n${locationName}`);
                label.push(`${formattedTimestamp}`);
                rainfallDataArray.push(rainfallValue);
            }
          }
        });


        var myChart = new Chart(chartCanvas, {
          type: 'line',
          data: {
            labels: label,
            datasets: [{
              label: 'Rainfall Data',
              data: rainfallDataArray,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(0, 0, 0, 1)',
              borderWidth: 1,
              fill: true,
              tension: 0.1,
            }]
          },
          options: {
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context) {
                    const dataIndex = context.dataIndex;
                    return 'Rainfall Data: ' + labelsArray[dataIndex];
                  }
                }
              }
            },
            scales: {
							x: {
								display: true,
								title: {
									display: true,
									text: 'Date and Time'
								}
							},
							y: {
								beginAtZero: true,
								display: true,
								title: {
									display: true,
									text: 'Rainfall (mm)'
								}
							}
            }
          }
        });

        // Store the new chart instance
        window.myChart = myChart;

        return myChart;
    }
}

// //============== UPDATE RIGHT CONTENT DISPLAY =================//

// Function to update the right section content using merged data
// function updateRightContainer(mergedData) {
//     // Ensure that each entry in mergedData has the parsedTimestamp property properly set
//     mergedData.forEach(entry => {
//         // Check if the entry has a timestamp field and it's not already a Date object
//         if (entry.timestamp && !(entry.timestamp instanceof Date)) {
//             // Convert the timestamp to a JavaScript Date object using TimestampConverter
//             if (typeof entry.timestamp.toDate === 'function') {
//                 // Firestore timestamp
//                 entry.parsedTimestamp = TimestampConverter.convertFirestoreTimestamp(entry.timestamp);
//             } else {
//                 // Realtime Database timestamp
//                 entry.parsedTimestamp = TimestampConverter.convertRTDBTimestamp(entry.timestamp);
//             }
//         }
//     });

//     // Sort the merged data by parsedTimestamp in descending order
//     mergedData.sort((a, b) => b.parsedTimestamp - a.parsedTimestamp);

//     // Get reference to the dataList element
//     var dataListElement = document.getElementById('dataList');

//     // Clear previous content
//     dataListElement.innerHTML = '';

//     // Iterate through merged data and create list items for each entry
//     mergedData.forEach(entry => {
//         // Create list item
//         var listItem = document.createElement('li');

//         // Check if the parsedTimestamp is valid
//         if (entry.parsedTimestamp instanceof Date && !isNaN(entry.parsedTimestamp.getTime())) {
//             // Format timestamp
//             var formattedTime = entry.parsedTimestamp.toLocaleTimeString('en-US', {
//                 hour: 'numeric',
//                 minute: 'numeric',
//             });
//             var formattedDate = entry.parsedTimestamp.toLocaleDateString('en-US', {
//                 month: 'long',
//                 day: 'numeric',
//                 year: 'numeric'
//             });

//             // Create and append time element
//             var time = document.createElement('div');
//             time.textContent = `Time: ${formattedTime}`;
//             listItem.appendChild(time);

//             // Create and append date element
//             var date = document.createElement('div');
//             date.textContent = `Date: ${formattedDate}`;
//             listItem.appendChild(date);
//         } else {
//             // Invalid parsedTimestamp
//             var invalidTimestamp = document.createElement('div');
//             invalidTimestamp.textContent = `Invalid Timestamp`;
//             listItem.appendChild(invalidTimestamp);
//         }

//         // Create and append rainfall value element
//         var rainfallValue = document.createElement('div');
//         rainfallValue.textContent = `Rainfall Value: ${entry.rainfallValue} mm`;
//         listItem.appendChild(rainfallValue);

//         // Create and append location element
//         var location = document.createElement('div');
//         var locationName = entry.locationName.replace(/, Calabarzon, \d{4}, Philippines/g, '');
//         location.textContent = `Location: ${locationName}`;
//         listItem.appendChild(location);

//         // Append list item to the data list
//         dataListElement.appendChild(listItem);
//     });
// }


//============== ALERT SYSTEM =================//

// // Function to check rainfall amounts and display pop-up messages
// function checkRainfallAndDisplayPopUp(mergedData) {
//     // Get the latest rainfall data
//     const latestRainfallData = mergedData[0];

//     // Display a pop-up message based on the rainfall amount
//     if (latestRainfallData && latestRainfallData.rainfallValue !== undefined) {
//         const rainfallValue = parseFloat(latestRainfallData.rainfallValue);
//         if (rainfallValue >= 0.93) { // Check if rainfall value is greater than or equal to 0
//             const parsedTimestamp = latestRainfallData.parsedTimestamp;
//             const locationName = latestRainfallData.locationName;
            
//             let intensity;
//             if (rainfallValue < 2.5) {
//                 intensity = "light";
//             } else if (rainfallValue >= 2.5 && rainfallValue < 7.5) {
//                 intensity = "moderate";
//             } else if (rainfallValue >= 7.5 && rainfallValue < 15) {
//                 intensity = "heavy";
//             } else if (rainfallValue >= 15 && rainfallValue < 30) {
//                 intensity = "intense";
//             } else {
//                 intensity = "torrential";
//             }

//             // Display the pop-up message with the correct intensity, rainfall amount, and timestamp
//             const message = `${getRainfallIntensityMessage(intensity)}\n Rainfall Value :${rainfallValue} mm \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${formatTimestamp(parsedTimestamp)}\n Location: ${locationName}\n ${getDescription(intensity)}`; 
//            displayPopUpMessage(message, intensity, rainfallValue, parsedTimestamp, locationName) ;
//         }
//     }
// }

// // Function to format the timestamp including time
// function formatTimestamp(timestamp) {
//     // Format the timestamp to display date as "Month Day, Year" (e.g., "May 5, 2024")
//     const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
//     return timestamp.toLocaleDateString('en-US', options);
// }


// // Function to get the message based on intensity
// function getRainfallIntensityMessage(intensity) {
//     switch (intensity) {
//         case 'light':
//             return "Light Rainfall";
//         case 'moderate':
//             return "Moderate Rainfall";
//         case 'heavy':
//             return "Heavy Rainfall";
//         case 'intense':
//             return "Intense Rainfall";
//         case 'torrential':
//             return "Torrential Rainfall";
//         default:
//             return "Unknown intensity";
//     }
// }

// // Function to get the description based on intensity
// function getDescription(intensity) {
//     switch (intensity) {
//         case 'light':
//             return "It's currently experiencing light rainfall.";
//         case 'moderate':
//             return "The rainfall is moderate at the moment.";
//         case 'heavy':
//             return "The rainfall is heavy. Please take necessary precautions.";
//         case 'intense':
//             return "The rainfall is intense. Stay indoors if possible.";
//         case 'torrential':
//             return "It's torrential rainfall. Avoid traveling if you can.";
//         default:
//             return "";
//     }
// }
// // Function to display a pop-up message using SweetAlert
// function displayPopUpMessage(message, intensity, rainfallValue, parsedTimestamp, locationName) {
//     // Set background color based on rainfall intensity
//     let bgColor;
//     switch (intensity) {
//         case 'light':
//             bgColor = 'rgb(185, 228, 243)';
//             break;
//         case 'moderate':
//             bgColor = ' rgba(152, 178, 252)';
//             break;
//         case 'heavy':
//             bgColor = 'yellow';
//             break;
//         case 'intense':
//             bgColor = 'orange';
//             break;
//         case 'torrential':
//             bgColor = 'rgb(255, 88, 88)';
//             break;
//         default:
//             bgColor = 'rgba(0, 0, 0, 0.8)'; // Default color
//     }

//     // Construct the message with appropriate line breaks and formatting
//     const formattedMessage = `
//     <div style="font-family: Arial, sans-serif; font-size: 16px; padding: 10px;">
//         <div style="margin-bottom: 10px; font-size: 20px;"><strong>${getRainfallIntensityMessage(intensity)}</strong></div>
//         <div style="margin-bottom: 7px;">Rainfall Amount: ${rainfallValue} mm</div>
//         <div style="margin-bottom: 7px;"> ${formatTimestamp(parsedTimestamp)}</div>
//         <div style="margin-bottom: 7px;">Location: ${locationName}</div>
//         <div style="line-height: 2;"><strong>${getDescription(intensity)}</strong></div>
//     </div>
// `;
//     // Display the SweetAlert pop-up if Swal is defined
//     if (typeof Swal !== 'undefined') {
//         Swal.fire({
//             title: '',
//             html: formattedMessage,
//             icon: 'info',
//             background: bgColor,
//             timer: 10000, // Auto close after 10 seconds
//             timerProgressBar: true,
//             showConfirmButton: false,
//         });
//     } else {
//         // Fallback to a regular alert if Swal is not defined
//         alert(message);
//     }
// }


// // Call the fetchDataAndMergeAndUpdateDOM function after initializing Flatpickr
// fetchDataAndMergeAndUpdateDOM();
// // Call the fetchDataAndMergeAndUpdateDOM function after initializing Flatpickr


//============== MUNICIPALIY CHART =================//

document.getElementById("municipalityFilter").addEventListener("click", function () {
    const tributaryName = document.getElementById("municipality__select").value;

    if (tributaryName === "-") {
        alert("Please select a tributary first.");
        return;
    }

    fetchRainData(tributaryName);
    
});


document.getElementById("forecastButton").addEventListener("click", function () {
    const forecastTributary = document.getElementById("forecast_tributary_select").value;

    if (forecastTributary === "-") {
        alert("Please select a tributary first.");
        return;
    }

    fetchForecasting(forecastTributary);
    latestDataFetching(forecastTributary);
    
});

async function latestDataFetching(forecastTributary) {

    async function fetchLatestData() {
        const url = `/public/php/getVolume.php?tributary=${encodeURIComponent(forecastTributary)}`;
    
        try {
            const response = await fetch(url);
            const data = await response.json();
    
            console.log("Fetched Data:", data); // Debugging line
    
            if (!data || data.error) {
                console.error("No valid latest data found:", data.error);
                return;
            }
    
            updateUIWithLatestData(data);
        } catch (error) {
            console.error("Error fetching latest data:", error);
        }
    }
    
    
    // Function to update the UI with the latest data
    function updateUIWithLatestData(data) {
        if (!data || typeof data.volume === "undefined") {
            console.error("No valid latest data found.");
            return;
        }
    
        // Update the UI elements
        const rainfallResultText = document.getElementById('rainfallResultText');
        const locationResultText = document.getElementById('locationResultText');
    
        if (rainfallResultText) {
            rainfallResultText.textContent = `${data.volume} mm`;
        } else {
            console.warn("Element 'rainfallResultText' not found.");
        }
    
        if (locationResultText) {
            locationResultText.textContent = forecastTributary || "Unknown Tributary";
        } else {
            console.warn("Element 'locationResultText' not found.");
        }
    }
    
    // Call fetchLatestData() at regular intervals (e.g., every 5 seconds)
    // setInterval(fetchLatestData, 5000);
    
    // Initial call to load data when the page loads
    fetchLatestData();
}


async function fetchForecasting(tributaryName) {
    fetch("http://localhost:5000/api/get_rain_data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tributary: tributaryName })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Received Rain Data:", data);
        if (data.length === 0) {
            // alert("No historical data found for this tributary.");
            showHistoricalDataAlert(tributaryName)
            return;
        }

        // ✅ Extract tributary value (if needed)
        const tributaryValue = data[0]?.tributary || tributaryName; 

        // ✅ Now call the forecast API using the same tributary
        return fetch("http://localhost:5000/api/forecast", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tributary: tributaryName})
        });
    })
    .then(response => response.json())
    .then(forecastData => {
        console.log("Received Forecast Data:", forecastData);
        if (forecastData.error) {
            alert("Error generating forecast: " + forecastData.error);
        }
    })
    .catch(error => console.error("Error:", error));
}



async function fetchRainData(tributaryName) {
    let url = `/public/php/get_rain_data.php?tributary=${encodeURIComponent(tributaryName)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error("Error fetching data:", data.error);
            return;
        }

        plotRainChart(data.rain_data, tributaryName);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

function showRainAlert(tributaryName) {
    document.getElementById("rainTributaryName").textContent = tributaryName;
    document.getElementById("rainAlertPopup").style.display = "flex";
}

function showHistoricalDataAlert(tributaryName){
    document.getElementById("historicalTributaryName").textContent = tributaryName;
    document.getElementById("historicalDataAlertPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("rainAlertPopup").style.display = "none";
    document.getElementById("historicalDataAlertPopup").style.display = "none";
}



function plotRainChart(rainData, tributaryName) {
    if (!rainData || rainData.length === 0) {
        // alert(`No rain data available for ${tributaryName}.`);
        showRainAlert(tributaryName);
        return;
    }

    const labels = rainData.map(entry => new Date(entry.timestamp).toLocaleString());
    const values = rainData.map(entry => entry.volume);

    const ctx = document.getElementById("dynamicChart").getContext("2d");

    if (window.dynamicChartInstance) {
        window.dynamicChartInstance.destroy();
    }

    window.dynamicChartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: `Rainfall Data for ${tributaryName}`,
                data: values,
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: "Timestamp" } },
                y: { title: { display: true, text: "Rainfall (mm)" } }
            }
        }
    });
}




// const municipality__FilterBtn = document.getElementById('municipalityFilter')

// municipality__FilterBtn.addEventListener('click', function(){
//     var municipality = document.getElementById('municipality__select')
//     var d = []
//     fetchDataFromDatabase(municipality.value).then(result=>{
//         // console.log('rtdb', result)
//         result.forEach(element=>{
//             d.push(element)
//         })
//         fetchDataContaining(municipality.value).then(result => {
//             // console.log('firestore', result)
//             result.forEach(element => {
//                 d.push(element)
//             })

//             // console.log('D[]inside', d)
//             // console.log('D[]inside length', d.length)

//             // * GENERATE THE CHART
//             var chartCanvas = document.getElementById('dynamicChart');
//             var ctx = chartCanvas.getContext('2d');
//             ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

//             // Check if there's an existing chart instance
//             if (window.myChart) {
//                 window.myChart.destroy();
//             }

//             // Ensure that each entry in mergedData has the parsedTimestamp property properly set
//             d.forEach(entry => {
//                 // Check if the entry has a timestamp field and it's not already a Date object
//                 if (entry.timestamp && !(entry.timestamp instanceof Date)) {
//                     // Convert the timestamp to a JavaScript Date object using TimestampConverter
//                     if (typeof entry.timestamp.toDate === 'function') {
//                         // Firestore timestamp
//                         entry.parsedTimestamp = TimestampConverter.convertFirestoreTimestamp(entry.timestamp);
//                     } else {
//                         // Realtime Database timestamp
//                         entry.parsedTimestamp = TimestampConverter.convertRTDBTimestamp(entry.timestamp);
//                     }
//                 }
//             });

//             d.sort((a, b) => a.parsedTimestamp - b.parsedTimestamp);

//             // Initialize arrays to store timestamp labels and rainfall data
//             var labelsArray = [];
//             var label = [];
//             var rainfallDataArray = [];
//             d.forEach(entry => {
//             if (entry.rainfallValue != "0" && entry.rainfallValue != 0) {
//             // Extract parsedTimestamp, locationName, and rainfallValue from each entry
//             var parsedTimestamp = entry.parsedTimestamp;
//             var locationName = entry.locationName;
//             var rainfallValue = entry.rainfallValue;

//             // Format parsedTimestamp to display in the chart (adjust this part as needed)
//             var formattedTimestamp = parsedTimestamp ? parsedTimestamp.toLocaleString() : 'Unknown';

//             // Add timestamp label and rainfall data to respective arrays
//             labelsArray.push(`${entry.rainfallValue} mm\n${formattedTimestamp}\n${locationName}`);
//             label.push(`${formattedTimestamp}`);
//             rainfallDataArray.push(rainfallValue);
//             }
//             });

//             var myChart = new Chart(chartCanvas, {
//                 type: 'line',
//                 data: {
//                 labels: label,
//                 datasets: [{
//                     label: 'Rainfall Data',
//                     data: rainfallDataArray,
//                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                     borderColor: 'rgba(0, 0, 0, 1)',
//                     borderWidth: 1,
//                     fill: true,
//                     tension: 0.1,
//                 }]
//                 },
//                 options: {
//                 plugins: {
//                     tooltip: {
//                     callbacks: {
//                         label: function (context) {
//                         const dataIndex = context.dataIndex;
//                         return 'Rainfall Data: ' + labelsArray[dataIndex];
//                         }
//                     }
//                     }
//                 },
//                 scales: {
// 									x: {
// 										display: true,
// 										title: {
// 											display: true,
// 											text: 'Date and Time'
// 										}
// 									},
// 									y: {
// 										beginAtZero: true,
// 										display: true,
// 										title: {
// 											display: true,
// 											text: 'Rainfall (mm)'
// 										}
// 									}
//                 }
//                 }
//             });

//             // Store the new chart instance
//             window.myChart = myChart;
//         })
//     })
// })


// function unixToDate(unixTimestamp) {
//     // Create a new Date object with the Unix timestamp multiplied by 1000 to convert it to milliseconds
//     const date = new Date(unixTimestamp * 1000);

//     // Get month name
//     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const month = monthNames[date.getMonth()];

//     // Get AM/PM indicator
//     const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

//     // Get hours in 12-hour format
//     let hours = date.getHours() % 12;
//     hours = hours ? hours : 12; // Handle midnight (0 hours)

//     // Get minutes and seconds with leading zeros
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');

//     // Get timezone offset
//     const timezoneOffset = date.getTimezoneOffset() / 60;
//     const timezone = `UTC${timezoneOffset >= 0 ? '+' : '-'}${Math.abs(timezoneOffset)}`;

//     // Construct the date string
//     const dateString = `${month} ${date.getDate()}, ${date.getFullYear()} at ${hours}:${minutes}:${seconds} ${ampm} ${timezone}`;

//     return dateString;
// }


// $('#rainDance').on('click', function(){
//     $('#rainDanceModal').css('background-color','#ECFEDB')
//     $('#rainDanceModal').css('display','block')
// })

// $('#rainDanceModal').on('click', function () {
//     $('#rainDanceModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#rainDanceModal').css('display', 'none')
// })
// $('#rainDanceBack').on('click', function () {
//     $('#rainDanceModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#rainDanceModal').css('display', 'none')
// })

// $('#rainDrop').on('click', function(){
//     $('#rainDropModal').css('background-color','#FFFEDC')
//     $('#rainDropModal').css('display','block')
// })

// $('#rainDropModal').on('click', function () {
//     $('#rainDropModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#rainDropModal').css('display', 'none')
// })
// $('#rainDropBack').on('click', function () {
//     $('#rainDropModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#rainDropModal').css('display', 'none')
// })

// $('#rainbowChasers').on('click', function () {
//     $('#rainbowChasersModal').css('background-color', '#DCF1FF')
//     $('#rainbowChasersModal').css('display', 'block')
// })

// $('#rainbowChasersModal').on('click', function () {
//     $('#rainbowChasersModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#rainbowChasersModal').css('display', 'none')
// })
// $('#rainbowChasersBack').on('click', function () {
//     $('#rainbowChasersModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#rainbowChasersModal').css('display', 'none')
// })

// $('#rainDropCanvas').on('click', function () {
//     $('#rainDropCanvasModal').css('background-color', '#FFDBF0')
//     $('#rainDropCanvasModal').css('display', 'block')
// })

// $('#rainDropCanvasModal').on('click', function () {
//     $('#rainDropCanvasModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#rainDropCanvasModal').css('display', 'none')
// })
// $('#rainDropCanvasBack').on('click', function () {
//     $('#rainDropCanvasModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#rainDropCanvasModal').css('display', 'none')
// })

// $('#waterWarriors').on('click', function () {
//     $('#waterWarriorsModal').css('background-color', '#DCF1FF')
//     $('#waterWarriorsModal').css('display', 'block')
// })

// $('#waterWarriorsModal').on('click', function () {
//     $('#waterWarriorsModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#waterWarriorsModal').css('display', 'none')
// })
// $('#waterWarriorsBack').on('click', function () {
//     $('#waterWarriorsModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#waterWarriorsModal').css('display', 'none')
// })

// $('#downPourDetectives').on('click', function () {
//     $('#downPourDetectivesModal').css('background-color', '#F4F4F4')
//     $('#downPourDetectivesModal').css('display', 'block')
// })

// $('#downPourDetectivesModal').on('click', function () {
//     $('#downPourDetectivesModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#downPourDetectivesModal').css('display', 'none')
// })
// $('#downPourDetectivesBack').on('click', function () {
//     $('#downPourDetectivesModal').css('background-color', 'rgba(0, 0, 0, 0.1)')
//     $('#downPourDetectivesModal').css('display', 'none')
// })


function removeLoader(){
    $('#loaderWrapper').css('display','none')
}



// //============== DATE CHANGER =================//

// function displayDataForDate(data){
//     // console.log(formatDateString(data))
//     var d = []
//     fetchDataFromDatabaseDateFiltered(formatDateString(data)).then(result => {
//         result.forEach(element => {
//             d.push(element)
//         })
//         fetchDataContainingDate(formatDateString(data)).then(result => {
//             // console.log('firestore', result)
//             result.forEach(element => {
//                 d.push(element)
//             })

//             // console.log('D[]inside', d)
//             // console.log('D[]inside length', d.length)

//             // * GENERATE THE CHART
//             var chartCanvas = document.getElementById('chart');
//             var ctx = chartCanvas.getContext('2d');
//             ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

//             // Check if there's an existing chart instance
//             if (window.myChart) {
//                 window.myChart.destroy();
//             }

//             // Ensure that each entry in mergedData has the parsedTimestamp property properly set
//             d.forEach(entry => {
//                 // Check if the entry has a timestamp field and it's not already a Date object
//                 if (entry.timestamp && !(entry.timestamp instanceof Date)) {
//                     // Convert the timestamp to a JavaScript Date object using TimestampConverter
//                     if (typeof entry.timestamp.toDate === 'function') {
//                         // Firestore timestamp
//                         entry.parsedTimestamp = TimestampConverter.convertFirestoreTimestamp(entry.timestamp);
//                     } else {
//                         // Realtime Database timestamp
//                         entry.parsedTimestamp = TimestampConverter.convertRTDBTimestamp(entry.timestamp);
//                     }
//                 }
//             });

//             d.sort((a, b) => a.parsedTimestamp - b.parsedTimestamp);

//             // Initialize arrays to store timestamp labels and rainfall data
//             var labelsArray = [];
//             var rainfallDataArray = [];
//             var label = [];
//             d.forEach(entry => {
//               if (entry.rainfallValue != "0" && entry.rainfallValue != 0){
//                   // Extract parsedTimestamp, locationName, and rainfallValue from each entry
//                   var parsedTimestamp = entry.parsedTimestamp;
//                   var locationName = entry.locationName;
//                   var rainfallValue = entry.rainfallValue;
  
//                   // Format parsedTimestamp to display in the chart (adjust this part as needed)
//                   var formattedTimestamp = parsedTimestamp ? parsedTimestamp.toLocaleString() : 'Unknown';
  
//                   // Add timestamp label and rainfall data to respective arrays
//                   labelsArray.push(`${entry.rainfallValue} mm\n${formattedTimestamp}\n${locationName}`);
//                   label.push(`${formattedTimestamp}`);
//                   rainfallDataArray.push(rainfallValue);
//                 }
//             });

//             var myChart = new Chart(chartCanvas, {
//                 type: 'line',
//                 data: {
//                     labels: label,
//                     datasets: [{
//                         label: 'Rainfall Data',
//                         data: rainfallDataArray,
//                         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                         borderColor: 'rgba(0, 0, 0, 1)',
//                         borderWidth: 1,
//                         fill: true,
//                         tension: 0.1,
//                     }]
//                 },
//                 options: {
//                     plugins:{
//                       tooltip:{
//                         callbacks:{
//                           label: function (context) {
//                             const dataIndex = context.dataIndex;
//                             return 'Rainfall Data: ' + labelsArray[dataIndex];
//                           }
//                         }
//                       }
//                     },
//                     scales: {
//                         x: {
//                             display: true,
// 														title: {
// 															display: true,
// 															text: 'Date and Time'
// 														}
//                         },
//                         y: {
//                             beginAtZero: true,
// 														display: true,
// 													title: {
// 														display: true,
// 														text: 'Rainfall (mm)'
// 													}
//                         }
//                     }
//                 }
//             });

//             // Store the new chart instance
//             window.myChart = myChart;
//         })
//     })
// }

// function formatDateString(originalDateString) {
//     // Parse the original date string into a Date object
//     const originalDate = new Date(originalDateString);

//     // Get the month name
//     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const monthName = monthNames[originalDate.getMonth()];

//     // Get the day, year, hours, and minutes
//     const day = originalDate.getDate();
//     const year = originalDate.getFullYear();
//     let hours = originalDate.getHours();
//     const minutes = originalDate.getMinutes();

//     // Convert hours to 12-hour format and determine AM/PM
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // Handle midnight (0 hours)

//     // Format the date components into the desired format
//     const formattedDateString = `${monthName} ${day}, ${year}`;

//     return formattedDateString;
// }


// async function fetchDataFromDatabaseDateFiltered(location) {
//     var filteredData = []
//     try {
//         // Reference to the location in the database
//         const databaseRef = ref(dbLive, 'Rain Gauge 1');
//         const snapshot = await get(databaseRef);
//         const data = snapshot.val();
//         const dataArray = Object.values(data);
//         dataArray.forEach(v => {
//             if ((v.timestamp).includes(location)) {
//                 filteredData.push(v)
//             }
//         })
//     } catch (error) {
//         // console.error("Error fetching data:", error);
//     }

//     try {
//         // Reference to the location in the database
//         const databaseRef = ref(dbLive, 'Rain Gauge 2');
//         const snapshot = await get(databaseRef);
//         const data = snapshot.val();
//         const dataArray = Object.values(data);
//         dataArray.forEach(v => {
//             if ((v.timestamp).includes(location)) {
//                 filteredData.push(v)
//             }
//         })
//     } catch (error) {
//         // console.error("Error fetching data:", error);
//     }

//     try {
//         // Reference to the location in the database
//         const databaseRef = ref(dbLive, 'Rain Gauge 3');
//         const snapshot = await get(databaseRef);
//         const data = snapshot.val();
//         const dataArray = Object.values(data);
//         dataArray.forEach(v => {
//             if ((v.timestamp).includes(location)) {
//                 filteredData.push(v)
//             }
//         })
//     } catch (error) {
//         // console.error("Error fetching data:", error);
//     }

//     try {
//         // Reference to the location in the database
//         const databaseRef = ref(dbLive, 'Rain Gauge 4');
//         const snapshot = await get(databaseRef);
//         const data = snapshot.val();
//         const dataArray = Object.values(data);
//         dataArray.forEach(v => {
//             if ((v.timestamp).includes(location)) {
//                 filteredData.push(v)
//             }
//         })
//         return filteredData
//     } catch (error) {
//         // console.error("Error fetching data:", error);
//     }
//     // console.log(filteredData)
// }

// async function fetchDataContainingDate(location) {
//     var filtered = []
//     try {
//         // Define the query
//         const q = query(collection(db, 'rainfall'));

//         // Execute the query
//         const querySnapshot = await getDocs(q);

//         // Filter the documents client-side
//         const filteredDocs = [];
//         querySnapshot.forEach((doc) => {
//             const data = doc.data();
//             data.timestamp = unixToDate(data.timestamp["seconds"])
//             // console.log("After: ",data)
//             if (data.timestamp.includes(location)) {
//                 filteredDocs.push({ id: doc.id, data });
//             }
//         });

//         // Process the filtered results
//         filteredDocs.forEach((doc) => {
//             // doc.data.timestamp = unixToDate(doc.data.timestamp["seconds"])
//             // console.log(doc.data.timestamp)
//             filtered.push(doc.data)
//         });
//         return filtered
//     } catch (error) {
//         // console.log('Error fetching data: ', error);
//     }

// }

// setInterval(refreshChart, 5 * 60 * 1000)
// setInterval(MonitorRain, 6 * 60 * 60 * 1000)


// function refreshChart(){
//     const data = new Date();
//     var d = []
//     fetchDataFromDatabaseDateFiltered(formatDateString(data)).then(result => {
//         // console.log('rtdb', result)
//         result.forEach(element => {
//             d.push(element)
//         })
//         fetchDataContainingDate(formatDateString(data)).then(result => {
//             // console.log('firestore', result)
//             result.forEach(element => {
//                 d.push(element)
//             })

//             // console.log('D[]inside', d)
//             // console.log('D[]inside length', d.length)

//             // * GENERATE THE CHART
//             var chartCanvas = document.getElementById('chart');
//             var ctx = chartCanvas.getContext('2d');
//             ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

//             // Check if there's an existing chart instance
//             if (window.myChart) {
//                 window.myChart.destroy();
//             }

//             // Ensure that each entry in mergedData has the parsedTimestamp property properly set
//             d.forEach(entry => {
//                 // Check if the entry has a timestamp field and it's not already a Date object
//                 if (entry.timestamp && !(entry.timestamp instanceof Date)) {
//                     // Convert the timestamp to a JavaScript Date object using TimestampConverter
//                     if (typeof entry.timestamp.toDate === 'function') {
//                         // Firestore timestamp
//                         entry.parsedTimestamp = TimestampConverter.convertFirestoreTimestamp(entry.timestamp);
//                     } else {
//                         // Realtime Database timestamp
//                         entry.parsedTimestamp = TimestampConverter.convertRTDBTimestamp(entry.timestamp);
//                     }
//                 }
//             });

//             d.sort((a, b) => a.parsedTimestamp - b.parsedTimestamp);

//             // Initialize arrays to store timestamp labels and rainfall data
//             var labelsArray = [];
//             var label = [];
//             var rainfallDataArray = [];
//             d.forEach(entry => {
//               if (entry.rainfallValue != "0" && entry.rainfallValue != 0) {
//                 // Extract parsedTimestamp, locationName, and rainfallValue from each entry
//                 var parsedTimestamp = entry.parsedTimestamp;
//                 var locationName = entry.locationName;
//                 var rainfallValue = entry.rainfallValue;

//                 // Format parsedTimestamp to display in the chart (adjust this part as needed)
//                 var formattedTimestamp = parsedTimestamp ? parsedTimestamp.toLocaleString() : 'Unknown';

//                 // Add timestamp label and rainfall data to respective arrays
//                 labelsArray.push(`${entry.rainfallValue} mm\n${formattedTimestamp}\n${locationName}`);
//                 rainfallDataArray.push(rainfallValue);
//               }
//             });

//           var myChart = new Chart(chartCanvas, {
//             type: 'line',
//             data: {
//               labels: label,
//               datasets: [{
//                 label: 'Rainfall Data',
//                 data: rainfallDataArray,
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(0, 0, 0, 1)',
//                 borderWidth: 1,
//                 fill: true,
//                 tension: 0.1,
//               }]
//             },
//             options: {
//               plugins: {
//                 tooltip: {
//                   callbacks: {
//                     label: function (context) {
//                       const dataIndex = context.dataIndex;
//                       return 'Rainfall Data: ' + labelsArray[dataIndex];
//                     }
//                   }
//                 }
//               },
//               scales: {
// 								x: {
// 									display: true,
// 									title: {
// 										display: true,
// 										text: 'Date and Time'
// 									}
// 								},
// 								y: {
// 									beginAtZero: true,
// 									display: true,
// 									title: {
// 										display: true,
// 										text: 'Rainfall (mm)'
// 									}
// 								}
//               }
//             }
//           });

//             // Store the new chart instance
//             window.myChart = myChart;
//         })
//     })
// }

function formatDate(dateString, includeTime = false) {
    if (!dateString) return "Invalid Date"; 

    let date = new Date(dateString);
    let dateOptions = { year: "numeric", month: "long", day: "2-digit" };
    let timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };

    if (includeTime) {
        return date.toLocaleTimeString("en-US", timeOptions); // Properly extract only time
    } else {
        return date.toLocaleDateString("en-US", dateOptions);
    }
}


function fetchAllRainfallData() {
    fetch('/public/php/get_rainfall_monitoring.php')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(result => {
            if (!Array.isArray(result) || result.length === 0) {
                document.getElementById('dataList').innerHTML = `
                    <li>
                        <div>No Rainfall data available.</div>
                    </li>
                    <hr>
                `;
                return;
            }

            processRainfallData(result);
        })
        .catch(error => console.error('Error fetching rainfall data:', error));
}

function processRainfallData(data) {
    if (data.length === 0) return;

    data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    let now = new Date();

    let currentIntervalEnd = new Date(now);
    let currentIntervalStart = new Date(currentIntervalEnd);
    currentIntervalStart.setHours(currentIntervalStart.getHours() - 6);

    let intervals = [];
    let intervalData = [];

    for (let i = data.length - 1; i >= 0; i--) {
        let entryTime = new Date(data[i].timestamp);

        while (entryTime < currentIntervalStart) {
            if (intervalData.length > 0) {
                intervals.push({
                    start: new Date(currentIntervalStart),
                    end: new Date(currentIntervalEnd),
                    data: [...intervalData]
                });
            }
            intervalData = [];

            currentIntervalEnd = new Date(currentIntervalStart);
            currentIntervalStart.setHours(currentIntervalStart.getHours() - 6);
        }

        intervalData.push(data[i]);
    }

    if (intervalData.length > 0) {
        intervals.push({
            start: new Date(currentIntervalStart),
            end: new Date(currentIntervalEnd),
            data: intervalData
        });
    }

    displayIntervals(intervals);
}

function displayIntervals(intervals) {
    let tributaries = [
        "Agoncillo Creek 1", "Agoncillo Creek 2", "Agoncillo Creek 3",
        "Ambulong Stream 2", "Ambulong Stream 3", "Balakilong Creek",
        "Balete River", "Banga Creek", "Bancoro Creek", "Bignay Creek",
        "Bilibinwang Creek 1", "Bilibinwang Creek 2", "Berinayan Creek",
        "Bulaklakan River", "Buso-buso Stream 1", "Buso-buso Stream 2",
        "Buso-buso Stream 3", "Buso-buso Stream 4", "Caloocan Creek",
        "Calumala Creek 1", "Calumala Creek 2", "Gulod Stream 3",
        "Gulod Stream 4", "Gulod Stream 5", "Gulod Stream 6",
        "Gulod Stream 7", "Kinalaglagan River", "Lambingan River",
        "Laurel River 1", "Molinete Creek 2", "Palsara River",
        "Pansipit River", "Sampaloc Creek 1", "Sampaloc Creek 2",
        "Tagudtod Creek", "Tumaway River", "Wawa River"
    ];

    document.getElementById('dataList').innerHTML = '';

    intervals.forEach((interval, index) => {
        let intervalStart = interval.start;
        let intervalEnd = interval.end;

        document.getElementById('dataList').innerHTML += `
            <h5>Rainfall Data From: </h5>
            <h6>${formatDate(intervalStart, false)} ${formatDate(intervalStart, true)} 
                To 
                ${formatDate(intervalEnd, false)} ${formatDate(intervalEnd, true)}
            </h6>
            <hr>
        `;

        tributaries.forEach(tributary => {
            let tribData = interval.data.filter(entry => entry.tributary === tributary);

            if (tribData.length === 0) {
                document.getElementById('dataList').innerHTML += `
                    <li>
                        <div>No Rainfall data for the last 6 hours.</div>
                        <div><strong>Date:</strong> ${formatDate(intervalStart)}</div>
                        <div><strong>Tributary:</strong> ${tributary}</div>
                    </li>
                    <hr>
                `;
            } else {
                tribData.forEach(entry => {
                    document.getElementById('dataList').innerHTML += `
                        <li>
                            <div><strong>Date:</strong> ${formatDate(entry.timestamp)}</div>
                            <div><strong>Time:</strong> ${formatDate(entry.timestamp, true)}</div>
                            <div><strong>Rainfall Value:</strong> ${entry.rainfall_value} mm</div>
                            <div><strong>Tributary:</strong> ${entry.tributary}</div>
                        </li>
                        <hr>
                    `;
                });
            }
        });
    });

    console.log("Rainfall data displayed in 6-hour intervals.");
}

// $(document).ready(function () {
//     // Fetch user data
//     $.ajax({
//         url: './php/userdata.php',
//         method: 'GET',
//         dataType: 'json',
//         success: function (response) {
//             if (!response.error) {
//                 $("#userDropdown").text(response.username);
//             } else {
//                 $("#userDropdown").text("Guest");
//             }
//         },
//         error: function () {
//             $("#userDropdown").text("Error fetching user");
//         }
//     });

//     // Toggle dropdown on click
//     $("#userDropdown").click(function () {
//         $(".dropdown-content").toggle();
//     });

//     // Close dropdown when clicking outside
//     $(document).click(function (event) {
//         if (!$(event.target).closest(".dropdown").length) {
//             $(".dropdown-content").hide();
//         }
//     });
// });

$(document).ready(function () {
    // Function to format text to sentence case
    function toSentenceCase(text) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    // Fetch user data
    $.ajax({
        url: './php/userdata.php',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            if (!response.error) {
                let formattedUsername = toSentenceCase(response.username);
                $("#userDropdown").text(formattedUsername);
            } else {
                $("#userDropdown").text("Guest");
            }
        },
        error: function () {
            $("#userDropdown").text("Error fetching user");
        }
    });

    // Toggle dropdown on click
    $("#userDropdown").click(function () {
        $(".dropdown-content").toggle();
    });

    // Close dropdown when clicking outside
    $(document).click(function (event) {
        if (!$(event.target).closest(".dropdown").length) {
            $(".dropdown-content").hide();
        }
    });

    $(document).ready(function () {
        // Ensure dropdown is hidden on page load
        $(".dropdown-content").hide(); 
        // Close dropdown when clicking outside
        $(document).on("click", function (event) {
            if (!$(event.target).closest(".dropdown").length) {
                $(".dropdown-content").slideUp(200); // Smoothly hide
            }
        });
    });

    
});





// Run the function when the page loads
document.addEventListener("DOMContentLoaded", fetchAllRainfallData);
