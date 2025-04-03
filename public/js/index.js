

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

//-----------------slider navigation bar---------------------//
const tab = document.querySelector('.tabs'),
    badges = tab.querySelectorAll('.tab');

badges.forEach(badge => {
    badge.addEventListener('click', () => {
        tab.querySelector('.active').classList.remove('active');
        badge.classList.add('active');
    })
});


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

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");
  
    if (menuBtn && closeBtn && sidebar) {
      // Open sidebar when menu button is clicked
      menuBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
        menuBtn.style.display = "none";
        closeBtn.style.display = "block"; // Show close button
      });
  
      // Close sidebar when close button is clicked
      closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
        menuBtn.style.display = "block"; // Show menu button again
        // closeBtn.style.display = "none";
      });
  
      // Close sidebar when clicking outside of it
      document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
          sidebar.classList.remove("active");
          menuBtn.style.display = "block"; // Show menu button again
          closeBtn.style.display = "none";
        }
      });
    } else {
      console.error("Sidebar or buttons not found!");
    }
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


// // Define the fetchDataAndMergeAndUpdateDOM function

// async function fetchDataAndMergeAndUpdateDOM() {
//     try {
//        // Function to fetch data from Firestore for rainfall collection
//         async function fetchDataFromFirestore() {
//             try {
//                 // Reference to the "rainfall" collection
//                 const rainfallCollectionRef = collection(db, "rainfall");
//                 // Get all documents in the "rainfall" collection
//                 const querySnapshot = await getDocs(rainfallCollectionRef);
//                 // Array to store fetched data
//                 const data = [];
//                 // Iterate through each document
//                 querySnapshot.forEach((doc) => {
//                     // Extract data from each document
//                     const docData = doc.data();
//                     // Convert Firestore timestamp to JavaScript Date object
//                     const parsedTimestamp = TimestampConverter.convertFirestoreTimestamp(docData.timestamp);
//                     // Format timestamp to match the desired format
//                     const formattedTimestamp = parsedTimestamp.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }) + " UTC+8";
//                     // Create a new object with the formatted timestamp
//                     const newData = {
//                         latitude: docData.latitude,
//                         locationName: docData.locationName,
//                         longitude: docData.longitude,
//                         parsedTimestamp: parsedTimestamp,
//                         rainfallValue: docData.rainfallValue,
//                         rssi: docData.rssi,
//                         timestamp: formattedTimestamp
//                     };
//                     // Push the new object to the data array
//                     data.push(newData);
//                 });
//                 // Return the fetched data
//                 return data;
//             } catch (error) {
//                 // console.error("Error fetching data from Firestore:", error);
//                 throw error;
//             }
//         }

//         // Function to fetch data from Realtime Database and convert to array for a specific rain gauge
//         async function fetchDataFromRealtimeDatabaseToArray(rainGaugeName) {
//             try {
//                 // Reference to the data in the database for the specified rain gauge
//                 const dataRef = ref(customDBVariable, rainGaugeName);
//                 // Get the data
//                 const snapshot = await get(dataRef);
//                 // Check if data exists
//                 if (snapshot.exists()) {
//                     const dataObj = snapshot.val();
//                     // Convert object to array of objects
//                     const dataArray = Object.values(dataObj);
//                     return dataArray;
//                 } else {
//                     // console.log("No data available for " + rainGaugeName);
//                     return [];
//                 }
//             } catch (error) {
//                 // console.error('Error fetching data from Realtime Database:', error);
//                 throw error;
//             }
//         }

//         // Merge function to combine data from Realtime Database and Firestore
//         async function mergeData() {
//             try {
//                 // Fetch data from Realtime Database for all rain gauges
//                 const rtdbDataArrays = await Promise.all([
//                     fetchDataFromRealtimeDatabaseToArray('Rain Gauge 1'),
//                     fetchDataFromRealtimeDatabaseToArray('Rain Gauge 2'),
//                     fetchDataFromRealtimeDatabaseToArray('Rain Gauge 3'),
//                     fetchDataFromRealtimeDatabaseToArray('Rain Gauge 4'),
//                 ]);

//                 // Fetch data from Firestore
//                 const firestoreDataArray = await fetchDataFromFirestore();

//                 // Combine the arrays
//                 const mergedData = [...firestoreDataArray];

//                 // Merge data from all rain gauges
//                 rtdbDataArrays.forEach((dataArray) => {
//                     mergedData.push(...dataArray);
//                 });

//                 return mergedData;
//             } catch (error) {
                
//                 throw error;
//             }
//         }
        
//          const mergedData = await mergeData();

        

//         updateUIWithLatestData(mergedData);
//         createChart(mergedData);
//         updateRightContainer(mergedData);
//         MonitorRain();
//         refreshChart();
//         setTimeout(checkRainfallAndDisplayPopUp(mergedData), 1 * 60 * 1000);
//     } catch (error) {
//         // console.error("Error:", error);
//     }
// }





// //============== UPDATE DISPLAY IN RAINFALL & LOCATION =================//

// // Function to update the UI with the latest data based on the timestamp
// function updateUIWithLatestData(mergedData) {
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

//     // Find the latest data based on the timestamp
//     const latestData = mergedData.reduce((prev, current) => {
//         return (prev.parsedTimestamp > current.parsedTimestamp) ? prev : current;
//     });

//     // Update the UI elements with the latest data
//     const rainfallResultText = document.getElementById('rainfallResultText');
//     const locationResultText = document.getElementById('locationResultText');

//     if (rainfallResultText && locationResultText) {
//         rainfallResultText.textContent = `${latestData.rainfallValue} mm`;
//         locationResultText.textContent = `${latestData.locationName}`;
//     } else {
//         // console.log("One or both of the HTML elements not found.");
//     }
// }

// // Call the fetchDataAndMergeAndUpdateDOM function initially
// fetchDataAndMergeAndUpdateDOM();


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

document.addEventListener("DOMContentLoaded", function () {
    const forecastPeriod = document.getElementById("forecastPeriod"); // Spinner input
    const datePickerInput = document.getElementById("datePicker"); // Flatpickr input

    // Initialize Flatpickr
    const datePicker = flatpickr(datePickerInput, {
        dateFormat: "F j, Y",
        altInput: true,
        altFormat: "F j, Y",
        onChange: function (selectedDates) {
            if (selectedDates.length > 0) {
                let selectedDate = selectedDates[0]; // Get picked date
                let today = new Date();
                let diffTime = selectedDate - today;
                let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
                forecastPeriod.value = diffDays > 0 ? diffDays : 0; // Update spinner
            }
        }
    });

    // Update Date Picker when spinner changes
    forecastPeriod.addEventListener("input", function () {
        let days = parseInt(forecastPeriod.value) || 0;
        let newDate = new Date();
        newDate.setDate(newDate.getDate() + days);
        datePicker.setDate(newDate, true); // Update Flatpickr
    });
});



//============== MUNICIPALIY CHART =================//

document.getElementById("municipalityFilter").addEventListener("click", function () {
    const selectedTributary = document.getElementById("municipality__select").value;

    if (selectedTributary === "") {
        // alert("Please select a tributary first.");
        showTributaryAlert();
        return;
    }

    fetchRainData(selectedTributary);
    
});


document.getElementById("forecastButton").addEventListener("click", function () {
    const forecastTributary = document.getElementById("forecast_tributary_select").value;

    if (forecastTributary === "") {
        // alert("Please select a tributary first.");
        showTributaryAlert();
        return;
    }

    fetchForecasting(forecastTributary);
    latestDataFetching(forecastTributary);
    
});

// async function latestDataFetching(forecastTributary) {

//     async function fetchLatestData() {

//         const url = `/public/php/getVolume.php?tributary=${encodeURIComponent(forecastTributary)}`;

    
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
    
//             console.log("Fetched Data:", data); // Debugging line
    
//             if (!data || data.error) {
//                 console.error("No valid latest data found:", data.error);
//                 return;
//             }
    
//             updateUIWithLatestData(data);
//         } catch (error) {
//             console.error("Error fetching latest data:", error);
//         }
//     }
    
    
//     // Function to update the UI with the latest data
//     function updateUIWithLatestData(data) {
//         if (!data || typeof data.total_volume === "undefined") {
//             console.error("No valid latest data found.");
//             return;
//         }
    
//         // Update the UI elements
//         const rainfallResultText = document.getElementById('rainfallResultText');
//         const locationResultText = document.getElementById('locationResultText');
    
//         if (rainfallResultText) {
//             rainfallResultText.textContent = data.total_volume + " mm";
//             console.log("Volume: ", data.total_volume)
//         } else {
//             console.log("Element 'rainfallResultText' not found.");
//         }
    
//         if (locationResultText) {
//             locationResultText.textContent = forecastTributary || "Unknown Tributary";
//         } else {
//             console.warn("Element 'locationResultText' not found.");
//         }
//     }
    
//     // Call fetchLatestData() at regular intervals (e.g., every 5 seconds)
//     // setInterval(fetchLatestData, 5000);
    
//     // Initial call to load data when the page loads
//     fetchLatestData();
// }

//fetching the tributaries based on the logged in municipalities
// Function to fetch user data and get municipality
async function fetchUserMunicipality() {
    try {
        const response = await fetch('./php/userdata.php');
        const data = await response.json();

        if (data.error) {
            console.error("Error fetching user data:", data.error);
            return null;
        }

    

        // Return the municipality associated with the user
        console.log(data.username);
        return data.username
    } catch (error) {
        console.error("Fetch Error (User Data):", error);
        return null;
    }
}

//====================Get the list of Municipality=========//

// Get the logged in user
async function getMunicipalityTributary() {
    const municipalityName = await fetchUserMunicipality();

    if (!municipalityName) {
        console.error("Municipality not found for the user.");
        return;
    }

    const response = await fetch(`/public/php/getTributaries.php?user=${encodeURIComponent(municipalityName)}`);
    const municipalityData = await response.json();


    return municipalityData;
}

//fetch the Municipality Names to the lists
async function loadUserMunicipality() {
    try {
        const userLoggedIn = await fetchUserMunicipality();

        // Fetch municipalities for the logged-in user
        const response = await fetch(`/public/php/getTributaries.php?user=${encodeURIComponent(userLoggedIn)}`);
        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
            console.error("No municipality data found");
            return {};
        }

        // Store municipality names in an object
        const municipalities = {};
        data.forEach(entry => {
            municipalities[entry.municipality] = []; // Placeholder for discharge data
        });

        console.log("Municipalities under user:", municipalities);
        return municipalities; // Return municipality list as an object

    } catch (error) {
        console.error("Error loading municipalities:", error);
        return {};
    }
}


//===================Tributary Chart===================//
// Function to fetch tributaries based on municipality
async function fetchTributaries() {
    try {
        const municipalityList = await loadUserMunicipality();
        const municipalityName = await fetchUserMunicipality(); // Get municipality from user data

        if (!municipalityName) {
            console.error("Municipality not found for the user.");
            return;
        }

        // Fetch tributaries based on municipality
        const response = await fetch(`/public/php/getTributaries.php?user=${encodeURIComponent(municipalityName)}`);
        const data = await response.json();
        console.log("Fetched Tributaries:", data);

        // if(data.municipality in municipalityList){
        //     console.log("Municipality found in the list:", data.municipality);
        // }


        // const tributarySelect = document.getElementById("forecast_tributary_select");
        // tributarySelect.innerHTML = "<option value='' selected hidden >Select tributary...</option>";


        const tributaryChart = document.getElementById("municipality__select");
        tributaryChart.innerHTML = "<option value='' selected hidden >Select tributary...</option>";

        const tributaryList = {};

        data.forEach(({ tributary, municipality }) => {
            if (!tributaryList[municipality]) {
                tributaryList[municipality] = new Set(); // Use a Set to store unique tributaries
            }
            tributaryList[municipality].add(tributary);
        });

        // Convert Set to an array if needed (JSON doesn't support Sets directly)
        for (const key in tributaryList) {
            tributaryList[key] = Array.from(tributaryList[key]);
        }

        console.log("Formatted Tributary List:", tributaryList);


        // for (const municipality in municipalityList){
        //     municipalityList[municipality] = tributaryList[municipality];
        // }
        // if (data.error) {
        //     console.error("Error:", data.error);
        // } else {
        //     data.forEach(tributary => {
        //         console.log("each trib: ", tributary);
        //         let option = document.createElement("option");
        //         option.value = tributary.tributary;
        //         option.textContent = tributary.tributary;
        //         tributarySelect.appendChild(option);
        //         // tributaryChart.appendChild(option);
        //     });
        // }

        if(data.error) {
            console.error("Error: ", data.error);
        } else {
            data.forEach(tributary => {
                let option = document.createElement("option");
                option.value = tributary.tributary;
                option.textContent = tributary.tributary;
                tributaryChart.appendChild(option);
            });
        }

        return tributaryList; // Return the list of municipalities and their tributaries
    } catch (error) {
        console.error("Fetch Error (Tributaries):", error);
    }
}

// Run functions when the page loads
document.addEventListener("DOMContentLoaded", fetchTributaries);




//================Forecasting Dashboard================//

// Get the total discharge of municipality per tributary
async function getTotalDischarge() {
    const userMunicipality = await fetchUserMunicipality();
    const majorTributaries = new Set([
        "Calumala Creek 1", "Calumala Creek 2", "Bancoro Creek", "Tagudtod Creek",
        "Pansipit River", "Agoncillo Creek 1", "Agoncillo Creek 2", "Agoncillo Creek 3",
        "Bilibinwang Creek 1", "Bilibinwang Creek 2", "Buso-buso Stream 1", "Buso-buso Stream 2",
        "Buso-buso Stream 3", "Buso-buso Stream 4", "Gulod Stream 3", "Gulod Stream 4",
        "Gulod Stream 5", "Gulod Stream 6", "Gulod Stream 7", "Laurel River 1",
        "Molinete Creek 2", "Balakilong Creek", "Berinayan Creek", "Sampaloc Creek 1",
        "Sampaloc Creek 2", "Banga Creek", "Lambingan River", "Tumaway River",
        "Bignay Creek", "Caloocan Creek", "Ambulong Stream 2", "Ambulong Stream 3",
        "Wawa River", "Balete River", "Palsara River", "Kinalaglagan River", "Bulaklakan River"
    ]);

    try {
        // Load the GeoJSON file using fetch
        const geojsonResponse = await fetch("http://localhost:3000/geojson_files/Waterways_updated.geojson");
        const geojsonData = await geojsonResponse.json();

        // Extract tributary coordinates
        const tributaries = {};
        geojsonData.features.forEach(feature => {
            const name = feature.properties?.name || "Unknown";
            const coordinates = feature.geometry?.coordinates || [];
            if (majorTributaries.has(name)) {
                tributaries[name] = coordinates;
            }
        });

        // Fetch piggeries data
        const piggeriesUrl = "http://localhost:3000/public/php/piggeries.php";
        const piggeriesResponse = await fetch(piggeriesUrl);
        const piggeriesData = await piggeriesResponse.json();

        // Fetch tributaries with municipality data
        const tributariesUrl = `http://localhost:3000/public/php/getTributaries.php?user=${encodeURIComponent(userMunicipality)}`;
        const tributariesResponse = await fetch(tributariesUrl);
        const tributariesData = await tributariesResponse.json();

        console.log("Fetch tributaries Discharge: ", tributariesData);

        // Filter piggeries and compute total discharge
        const distanceThreshold = 40; // Meters
        const tributaryDischarge = {};

        piggeriesData.forEach(piggery => {
            if (piggery.sanitation === "Free-flow" && parseFloat(piggery.discharge) > 0) {
                const piggeryLocation = { latitude: parseFloat(piggery.latitude), longitude: parseFloat(piggery.longitude) };

                for (const [tribName, tribCoords] of Object.entries(tributaries)) {
                    for (const coord of tribCoords) {
                        const tributaryLocation = { latitude: coord[1], longitude: coord[0] }; // Convert GeoJSON format
                        const distance = getDistance(piggeryLocation, tributaryLocation);

                        if (distance < distanceThreshold) {
                            if (!tributaryDischarge[tribName]) {
                                tributaryDischarge[tribName] = 0;
                            }
                            tributaryDischarge[tribName] += parseFloat(piggery.discharge);
                            break; // Stop checking once assigned
                        }
                    }
                }
            }
        });

        // Group by municipality (ENSURE 0 DISCHARGE TRIBUTARIES ARE INCLUDED)
        const municipalityDischarge = {};
        tributariesData.forEach(({ tributary, municipality }) => {
            if (!municipalityDischarge[municipality]) {
                municipalityDischarge[municipality] = [];
            }
            municipalityDischarge[municipality].push({
                tributary, 
                discharge: tributaryDischarge[tributary] ?? 0 // Include 0 discharge tributaries
            });
        });

        return municipalityDischarge;
    } catch (error) {
        console.error("❌ Error fetching data", error);
        return {};
    }
}

// Function to calculate distance using Haversine formula
function getDistance(coord1, coord2) {
    const toRad = x => (x * Math.PI) / 180;
    const R = 6371000; // Earth's radius in meters
    const dLat = toRad(coord2.latitude - coord1.latitude);
    const dLon = toRad(coord2.longitude - coord1.longitude);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(coord1.latitude)) * Math.cos(toRad(coord2.latitude)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

getTotalDischarge().then(municipalityData => {
    console.log("Discharge grouped by municipality:", municipalityData);
});

document.addEventListener("DOMContentLoaded", getMunicipalityTributary);



// Get the percentage of discharge contribution per tributary
async function computeDischargePercentage() {
    const municipalityDischarge = await getTotalDischarge(); // Get discharge data
    const municipalityList = await loadUserMunicipality(); // Get municipalities under user

    console.log("Municipalities under user: ", municipalityList);

    // Store percentages
    const dischargePercentage = {};

    for (const [municipality, tributaries] of Object.entries(municipalityDischarge)) {
        // Calculate total discharge for the municipality
        const totalDischarge = tributaries.reduce((sum, { discharge }) => sum + discharge, 0);

        // Compute percentage for each tributary
        dischargePercentage[municipality] = tributaries.map(({ tributary, discharge }) => ({
            tributary,
            discharge: parseFloat(discharge.toFixed(2)),
            percentage: totalDischarge > 0 ? parseFloat(((discharge / totalDischarge) * 100).toFixed(2)) : 0
        }));

        // Attach computed data to the municipality list
        if (municipality in municipalityList) {
            municipalityList[municipality] = dischargePercentage[municipality];
        }
    }

    console.log("Updated municipality list with discharge percentage:", municipalityList);
    return municipalityList;
}

// Call the function and log the result
computeDischargePercentage().then(data => {
    console.log("Final Data:", data);
});

////
async function updateMunicipalityTabs() {
    try {
        const municipalityData = await computeDischargePercentage();
        const municipalitySanitationData = await getSanitation();
        const municipalityTributaryData = await fetchTributaries()

        console.log("municipalityTributaryData: ", municipalityTributaryData);

        
        const municipalityTabs = document.getElementById("municipalityTabs");
        municipalityTabs.innerHTML = ""; // Clear existing tabs
        // const tributaryMap = {}; // Object to store tributary data

        let first = true; // Flag to track the first municipality

        for (const municipality of Object.keys(municipalityData)) {
            const dischargeData = municipalityData[municipality] || {};
            const sanitationData = municipalitySanitationData[municipality] || {};
            const tributaryData = municipalityTributaryData[municipality] || [];

            // Create a tab for each municipality
            const li = document.createElement("li");
            li.className = "tab";
            li.textContent = municipality;

            if (first) {
                li.classList.add("active"); // Mark the first tab as active
                first = false;
            }

            // Attach data attributes for future reference
            li.dataset.discharge = JSON.stringify(dischargeData);
            li.dataset.sanitation = JSON.stringify(sanitationData);
            li.dataset.tributary = JSON.stringify(tributaryData);

            // Event listener to handle tab switching
            li.addEventListener("click", () => {
                document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
                li.classList.add("active");

                console.log(`Data for ${municipality}:`, {
                    dischargeData,
                    sanitationData,
                    tributaryData
                });

                updateTributaryDropdown(tributaryData);
            });

            // Append municipality tab
            municipalityTabs.appendChild(li);
        }

        // If there's an active tab, populate the dropdown initially
        const activeTab = document.querySelector(".tab.active");
        if (activeTab) {
            const initialTributaryData = JSON.parse(activeTab.dataset.tributary);
            updateTributaryDropdown(initialTributaryData);
        }

    } catch (error) {
        console.error("Error in updateMunicipalityTabs:", error);
    }
}

// Function to update the tributary dropdown
function updateTributaryDropdown(tributaryData) {
    const tributarySelect = document.getElementById("forecast_tributary_select");
    tributarySelect.innerHTML = "<option value='' selected hidden>Select tributary...</option>";

    tributaryData.forEach(tributaryName => {
        let option = document.createElement("option");
        option.value = tributaryName;
        option.textContent = tributaryName;
        tributarySelect.appendChild(option);
    });

    console.log("Updated Tributary Dropdown:", tributarySelect);
}

// Call function to update the UI
document.addEventListener("DOMContentLoaded", updateMunicipalityTabs);

async function updateDischargeChart(selectedMunicipality = null) {
    try {
        // Step 1: Fetch logged-in user's municipalities
        const userMunicipalities = await fetchUserMunicipality();
        const municipalityResponse = await fetch(`/public/php/getTributaries.php?user=${encodeURIComponent(userMunicipalities)}`);
        const municipalityData = await municipalityResponse.json();

        if (!municipalityData || municipalityData.length === 0) {
            console.error("❌ No municipality data found!");
            return;
        }

        // Step 2: Fetch discharge percentage data
        const dischargeData = await computeDischargePercentage();
        console.log("📊 Discharge Data:", dischargeData);

        // Step 3: Determine which municipality to show on the chart
        let municipalityName = selectedMunicipality || municipalityData[0]?.municipality;

        if (!municipalityName) {
            console.warn("⚠ No municipality name available!");
            return;
        }

        console.log("🔹 Displaying Data for:", municipalityName);

        // Step 4: Check if discharge data exists for the selected municipality
        let dischargeInfo = dischargeData[municipalityName];

        let labels, data, backgroundColors, borderColors;

        if (!dischargeInfo || dischargeInfo.length === 0) {
            console.warn(`⚠ No discharge data available for ${municipalityName}`);

            // Show a "No Data Available" segment filling 100%
            labels = ["No Data Available"];
            data = [100]; // Fill the entire chart
            backgroundColors = ["rgba(200, 200, 200, 0.6)"];
            borderColors = ["rgba(150, 150, 150,ta 1)"];
        } else {
            // Step 5: Extract labels (tributaries) and data (percentage contribution)
            labels = dischargeInfo.map(item => item.tributary);
            data = dischargeInfo.map(item => item.percentage);
            
            // Ensure the total percentage sums up to 100%
            const totalPercentage = data.reduce((sum, val) => sum + val, 0);
            if (totalPercentage < 100) {
                labels.push("No Data Available");
                data.push(100 - totalPercentage);
            }

            backgroundColors = [
                'rgba(108, 229, 232, 0.9)',  // Light Cyan Blue
                'rgba(65, 184, 219, 0.9)',   // Sky Blue
                'rgba(45, 139, 186, 0.9)',   // Cerulean Blue
                'rgba(47, 82, 152, 0.9)',    // Royal Blue
                'rgba(16, 70, 135, 0.9)',    // Deep Blue
                'rgba(0, 58, 128, 0.9)',     // Navy Blue
                'rgba(0, 49, 108, 0.9)',     // Dark Navy
                'rgba(75, 180, 225, 0.9)',   // Sky Blue Tint
                'rgba(30, 144, 255, 0.9)',   // Dodger Blue
                'rgba(0, 119, 190, 0.9)',    // Ocean Blue
                'rgba(70, 130, 180, 0.9)',   // Steel Blue
                'rgba(0, 153, 204, 0.9)',    // Bright Aqua Blue
                'rgba(0, 102, 204, 0.9)'     // Vivid Blue
            ];
            borderColors = 'rgba(255, 255, 255, 1)'; // White border for all segments
        }

        const ctx = document.getElementById('doughnut').getContext('2d');

        // Step 6: Destroy previous chart instance if it exists
        if (window.dischargeChartInstance) {
            window.dischargeChartInstance.destroy();
        }

        // Step 7: Create a new doughnut chart with updated data
        window.dischargeChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    label: `Discharge Contribution for ${municipalityName}`,
                    data: data,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: `Discharge Contribution for ${municipalityName}`, 
                        font: {
                            size: 12
                        },
                        color: '#000', // Set title color
                        padding: {
                            top: 10,
                            bottom: 10
                        }
                    },
                    legend: {
                        position: 'right',
                        labels: {
                            font: {
                                size: 12
                            }
                        },
                        padding: {
                            top: 20,
                            bottom: 0
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                            }
                        }
                    }
                }
            }
        });

    } catch (error) {
        console.error("❌ Error updating discharge chart:", error);
    }
}

// ✅ Fetch discharge chart on page load
document.addEventListener("DOMContentLoaded", () => {
    updateDischargeChart();
});

// ✅ Add event listener to update chart when a user selects a municipality
// document.getElementById("municipalityTabs").addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         const selectedMunicipality = event.target.textContent;
//         updateDischargeChart(selectedMunicipality);
//     }
// });




//Get Sanitation type of every municipality
async function getSanitation() {
    try {
        // Fetch logged-in user's municipality
        const userMunicipality = await fetchUserMunicipality();
        const municipalityList = await loadUserMunicipality();

        // Fetch tributary data to link tributaries to municipalities
        // const sanitationResponse = await fetch(`http://localhost:3000/public/php/getTributaries.php?user=${encodeURIComponent(userMunicipality)}`);
        // const sanitationData = await sanitationResponse.json();

        // Fetch piggeries data
        const response = await fetch("http://localhost:3000/public/php/piggeries.php");
        const piggeriesData = await response.json();

        // Extract all possible sanitation types from the dataset
        const allSanitationTypes = new Set(piggeriesData.map(piggery => piggery.sanitation));

        // Object to store sanitation counts per municipality
        const sanitationCount = {};

        // Process piggeries data
        piggeriesData.forEach(piggery => {
            const { municipality, sanitation } = piggery;

            // Ensure municipality exists in the sanitationCount object
            if (!sanitationCount[municipality]) {
                sanitationCount[municipality] = {};
                
                // Initialize all sanitation types to 0
                allSanitationTypes.forEach(type => {
                    sanitationCount[municipality][type] = 0;
                });
            }

            // Increment the sanitation count
            sanitationCount[municipality][sanitation]++;
            
        });

        // Ensure all municipalities have all sanitation types (even if missing)
        for (const municipality in sanitationCount) {
            allSanitationTypes.forEach(type => {
                if (!sanitationCount[municipality].hasOwnProperty(type)) {
                    sanitationCount[municipality][type] = 0;
                }
            });

            if(municipality in municipalityList){
                municipalityList[municipality] = sanitationCount[municipality];
            }
        }

        console.log("Sanitation count per municipality: ", sanitationCount);
        return sanitationCount;

    } catch (error) {
        console.error("❌ Error fetching sanitation data:", error);
        return {};
    }
}

// Call function and log result
getSanitation().then(data => {
    console.log("Total sanitation count per municipality: ", data);
});


// Function to update the bar chart
async function updateSanitationChart(selectedMunicipality = null) {
    try {
        // Fetch logged-in user's municipality from getTributaries.php
        const userMunicipalities = await fetchUserMunicipality();
        const userMunicipalityResponse = await fetch(`/public/php/getTributaries.php?user=${encodeURIComponent(await fetchUserMunicipality())}`);
        const userMunicipalityData = await userMunicipalityResponse.json();

        // Check if valid municipality data is received
        if (!userMunicipalityData || userMunicipalityData.length === 0) {
            console.warn("⚠ No municipality data found for the logged-in user.");
            return;
        }

        // Fetch sanitation data
        const sanitationData = await getSanitation();

        // Extract the municipality name (assuming the user is associated with one municipality)
        const municipalityName = selectedMunicipality || userMunicipalityData[0].municipality; 



        // Get sanitation counts for the fetched municipality
        const sanitationCounts = sanitationData[municipalityName];

        console.log("sanitation counts: ", sanitationCounts);

        // Check if sanitation data exists for the user's municipality
        if (!sanitationCounts) {
            console.warn(`⚠ No sanitation data available for ${municipalityName}`);
            return;
        }

        const ctx = document.getElementById('barchart').getContext('2d');

        // Extract sanitation types and counts
        const labels = Object.keys(sanitationCounts); // Sanitation types
        const data = labels.map(type => sanitationCounts[type]); // Corresponding counts

        // Destroy previous chart instance if it exists (to prevent duplicates)
        if (window.sanitationChartInstance) {
            window.sanitationChartInstance.destroy();
        }

        // Create new bar chart
        window.sanitationChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: `Sanitation Count for ${municipalityName}`,
                    data: data,
                    backgroundColor: [
                        'rgb(108, 229, 232)',
                        'rgb(65, 184, 219)',
                        'rgb(45, 139, 186)',
                        'rgb(47, 82, 152)',
                        'rgb(16, 70, 135)',
                        'rgb(0, 58, 128)',
                        'rgb(0, 49, 108)',
                        'rgb(0, 37, 83)'
                    ],
                    borderColor: [
                        'rgb(108, 229, 232)',
                        'rgb(65, 184, 219)',
                        'rgb(45, 139, 186)',
                        'rgb(47, 82, 152)',
                        'rgb(16, 70, 135)',
                        'rgb(0, 58, 128)',
                        'rgb(0, 49, 108)',
                        'rgb(0, 37, 83)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'x', // Flip chart to horizontal bars
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                        title: { display: true, text: 'Sanitation Type' },
                        font: { weight: "bold", color: "black" }
                    },
                    y: {
                        title: { display: true, text: 'Sanitation Count' }
                    }
                }
            }
        });

    } catch (error) {
        console.error("❌ Error updating sanitation chart:", error);
    }
}

// Call function to update chart

document.addEventListener("DOMContentLoaded", () => {
    updateSanitationChart();
});

// ✅ Add event listener to update chart when a user selects a municipality
document.getElementById("municipalityTabs").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedMunicipality = event.target.textContent;
        updateDischargeChart(selectedMunicipality);
        updateSanitationChart(selectedMunicipality);
    }
});



//Request to Server Flas API
document.addEventListener("DOMContentLoaded", async function () {
    const dropdown = document.getElementById("forecast_tributary_select");
    const forecastPeriodInput = document.getElementById("forecastPeriod");
    const forecastButton = document.getElementById("forecastButton");
    const chartCanvas = document.getElementById("forecastChart");
    let chartInstance = null; // Store Chart.js instance
    let tributaryMap = {}; // Store tributary-to-encoded_tributary mapping
    let cachedForecasts = {}; // Store fetched forecast data per tributary

    /** ✅ Fetch Tributaries & Populate Dropdown */
    async function fetchTributaries() {
        try {
            const response = await fetch("http://127.0.0.1:5000/api/tributaries");
            if (!response.ok) throw new Error("Failed to fetch tributaries");

            const tributaries = await response.json();

            dropdown.innerHTML = "<option value='' selected hidden>Select tributary...</option>";
            tributaries.forEach(entry => {
                let option = document.createElement("option");
                option.value = entry.tributary;
                option.textContent = `${entry.tributary} (${entry.municipality_name})`;
                dropdown.appendChild(option);
                tributaryMap[entry.tributary] = entry.encoded_tributary;
            });
        } catch (error) {
            console.error("Error fetching tributaries:", error);
        }
    }

    /** 🔍 Fetch Forecast */
    async function fetchForecast() {
        const selectedTributary = dropdown.value;
        const forecastPeriod = parseInt(forecastPeriodInput.value) || 10;

        if (!selectedTributary) {
            console.warn("Invalid tributary selection.");
            return;
        }

        console.log(`📡 Fetching forecast for: ${selectedTributary}, Period: ${forecastPeriod} days`);

        try {
            const url = `http://127.0.0.1:5000/api/forecast?periods=${forecastPeriod}&tributary=${selectedTributary}`;
            const forecastResponse = await fetch(url);
            if (!forecastResponse.ok) throw new Error(`HTTP error! Status: ${forecastResponse.status}`);

            const forecastData = await forecastResponse.json();
            console.log("Fetched Forecast Data:", forecastData);

            if (forecastData.forecasts?.length) {
                let forecastEntries = forecastData.forecasts.find(entry => entry.tributary === selectedTributary);
                if (forecastEntries?.forecastV) {
                    cachedForecasts[selectedTributary] = forecastEntries.forecastV;
                    updateChart(forecastEntries.forecastV, selectedTributary, forecastPeriod);
                } else {
                    console.warn("⚠ No forecastV data found for selected tributary.");
                    clearChart();
                }
            } else {
                console.warn("⚠ No forecast data found.");
                clearChart();
            }
        } catch (error) {
            console.error("❌ Error fetching forecast data:", error);
        }
    }

    /** 📈 Update Chart */
    function updateChart(forecastData, tributaryName, period) {
        const ctx = chartCanvas.getContext("2d");
        const labels = forecastData.slice(0, period).map(entry => entry.date);
        const values = forecastData.slice(0, period).map(entry => entry.forecast);

        if (chartInstance) chartInstance.destroy();

        chartInstance = new Chart(ctx, {
            type: "line",
            data: {
                labels,
                datasets: [{
                    label: `Forecast for ${tributaryName}`,
                    data: values,
                    borderColor: "rgb(45, 139, 186)",
                    backgroundColor: "rgba(108, 229, 232,0.2)",
                    fill: true,
                    tension: 0.4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { title: { display: true, text: "Date" } },
                    y: { title: { display: true, text: "Forecasted Value" } }
                }
            }
        });
    }

    /** 🗑 Clear Chart */
    function clearChart() {
        if (chartInstance) {
            chartInstance.destroy();
            chartInstance = null;
        }
    }

    /** 🎯 Fetch Latest Data */
    async function latestDataFetching() {
        const selectedTributary = dropdown.value;
        if (!selectedTributary) {
            console.warn("No tributary selected.");
            return;
        }

        const url = `/public/php/getVolume.php?tributary=${encodeURIComponent(selectedTributary)}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log("Fetched Data:", data);

            if (data?.error) {
                console.error("No valid latest data found:", data.error);
                return;
            }

            updateUIWithLatestData(data, selectedTributary);
        } catch (error) {
            console.error("Error fetching latest data:", error);
        }
    }

    function updateUIWithLatestData(data, selectedTributary) {
        if (!data?.total_volume) {
            console.error("No valid latest data found.");
            return;
        }

        const rainfallResultText = document.getElementById('rainfallResultText');
        const dischargeVolumeText = document.getElementById('dischargeVolumeText');
        const rainfallIntensityText = document.getElementById('rainfallIntensityText');

        let rainfallIntensity = data.total_volume < 2.5 ? "Light" :
                                data.total_volume < 7.5 ? "Moderate" :
                                data.total_volume < 15 ? "Heavy" :
                                data.total_volume < 30 ? "Intense" : "Torrential";

        if (rainfallResultText) rainfallResultText.textContent = `${data.total_volume.toFixed(2)} msm`;
        if (rainfallIntensityText) rainfallIntensityText.innerHTML = `${rainfallIntensity}`;

        getTotalDischarge().then(dischargeData => {
            if (!dischargeVolumeText) return;
            let totalDischarge = Object.values(dischargeData).flat().find(entry => entry.tributary === selectedTributary)?.discharge || 0;
            dischargeVolumeText.textContent = `${totalDischarge.toFixed(2)} kg`;
        });
    }

    // ✅ Load tributaries on page load
    await fetchTributaries();

    // ✅ Add event listener ONCE
    forecastButton.addEventListener("click", async () => {
        await fetchForecast();
        await latestDataFetching();
    });
});



//////////////////////////////////////////

// async function getMunicipality() {
//     try {
//         // Step 1: Get the username
//         const username = await fetchUserMunicipality();

//         if (!username) {
//             console.error("Username not found");
//             return null;
//         }

//         console.log("Fetched Username:", username); // Debugging output

//         // Step 2: Fetch municipality_name based on username
//         const userResponse = await fetch(`/public/php/getTributaries.php?user=${encodeURIComponent(username)}`);
//         const userData = await userResponse.json();

//         console.log("User Data from API:", userData); // Debugging output

//         if (!userData || !Array.isArray(userData) || userData.length === 0) {
//             console.error("No municipality found for user");
//             return null;
//         }

//         // Extract municipality_name
//         const municipalities = [...new Set(userData.map(item => item.municipality_name))];

//         if (municipalities.length === 0) {
//             console.error("No valid municipalities found");
//             return null;
//         }

//         console.log("Extracted Municipalities:", municipalities);

//         let allTributaries = [];

//         // Step 3: Fetch tributaries for each municipality_name
//         for (const municipality of municipalities) {
//             console.log(`Fetching tributaries for: ${municipality}`);
//             const muniResponse = await fetch(`/public/php/getTributaries.php?municipality_name=${encodeURIComponent(municipality)}`);
//             const municipalityData = await muniResponse.json();

//             console.log(`Municipality Data for ${municipality}:`, municipalityData);

//             if (municipalityData && Array.isArray(municipalityData)) {
//                 allTributaries.push({
//                     municipality_name: municipality,
//                     tributaries: municipalityData.map(item => item.tributary),
//                 });
//             }
//         }

//         console.log("Collected Tributaries by Municipality:", allTributaries);
        
//         // for (const municipality of municipalities) {
//         //     console.log(`Fetching tributaries for: ${municipality}`);
//         //     const muniResponse = await fetch(`/public/php/getTributaries.php?municipality_name=${encodeURIComponent(municipality)}`);
//         //     const municipalityData = await muniResponse.json();

//         //     console.log(`Municipality Data for ${municipality}:`, municipalityData); // ✅ Moved inside loop

//         //     if (municipalityData && Array.isArray(municipalityData)) {
//         //         allTributaries = [...allTributaries, ...municipalityData.map(item => item.tributary)];
//         //     }
//         // }

//         // console.log("Flattened Lists of Tributaries:", allTributaries);


//         localStorage.setItem("allTributaries", JSON.stringify(allTributaries));

        

//         fetchForecasting(allTributaries);
//         return allTributaries;  

//         return allTributaries; // ✅ Returning structured data

//     } catch (error) {
//         console.error("Fetch Error (Municipality & Tributaries):", error);
//         return null;
//     }
// }

// getMunicipality();

// document.addEventListener("DOMContentLoaded", async function () {
//     try {
//         const username = await fetchUserMunicipality();

//         if (!username) {
//             console.error("Username not found");
//             return null;
//         }

//         console.log("Fetched Username:", username); // Debugging output

//         // Step 2: Fetch municipality_name based on username
//         const userResponse = await fetch(`/public/php/getTributaries.php?user=${encodeURIComponent(username)}`);
//         const userData = await userResponse.json();

//         console.log("User Data from API:", userData); // Debugging output

//         if (!userData || !Array.isArray(userData) || userData.length === 0) {
//             console.error("No municipality found for user");
//             return null;
//         }

//         // Extract municipality_name
//         const municipalities = [...new Set(userData.map(item => item.municipality_name))];

//         if (municipalities.length === 0) {
//             console.error("No valid municipalities found");
//             return null;
//         }

//         console.log("Extracted Municipalities:", municipalities);

//         let tributaryDict = [];

//         // Step 3: Fetch tributaries for each municipality_name
//         for (const municipality of municipalities) {
//             console.log(`Fetching tributaries for: ${municipality}`);
//             const muniResponse = await fetch(`/public/php/getTributaries.php?municipality_name=${encodeURIComponent(municipality)}`);
//             const municipalityData = await muniResponse.json();

//             console.log(`Municipality Data for ${municipality}:`, municipalityData);

//             if (municipalityData && Array.isArray(municipalityData)) {
//                 tributaryDict.push({
//                     municipality_name: municipality,
//                     tributaries: municipalityData.map(item => item.tributary),
//                 });
//             }
//         }

//         console.log("Collected Tributaries by Municipality:", tributaryDict);

//         return tributaryDict;
//     } catch (error) {
//         console.error("❌ Error initializing forecast fetch:", error);
//     }
// });


// document.addEventListener("DOMContentLoaded", async function () {
//     try {
//         const username = await fetchUserMunicipality();

//         if (!username) {
//             console.error("Username not found");
//             return null;
//         }

//         console.log("Fetched Username:", username); // Debugging output

//         // Step 2: Fetch municipality_name based on username
//         const userResponse = await fetch(`/public/php/getTributaries.php?user=${encodeURIComponent(username)}`);
//         const userData = await userResponse.json();

//         console.log("User Data from API:", userData); // Debugging output

//         if (!userData || !Array.isArray(userData) || userData.length === 0) {
//             console.error("No municipality found for user");
//             return null;
//         }

//         // Extract municipality_name
//         const municipalities = [...new Set(userData.map(item => item.municipality_name))];

//         if (municipalities.length === 0) {
//             console.error("No valid municipalities found");
//             return null;
//         }

//         console.log("Extracted Municipalities:", municipalities);

//         let tributaryDict = [];

//         // Step 3: Fetch tributaries for each municipality_name
//         for (const municipality of municipalities) {
//             console.log(`Fetching tributaries for: ${municipality}`);
//             const muniResponse = await fetch(`/public/php/getTributaries.php?municipality_name=${encodeURIComponent(municipality)}`);
//             const municipalityData = await muniResponse.json();

//             console.log(`Municipality Data for ${municipality}:`, municipalityData);

//             if (municipalityData && Array.isArray(municipalityData)) {
//                 tributaryDict.push({
//                     municipality_name: municipality,
//                     tributaries: municipalityData.map(item => item.tributary),
//                 });
//             }
//         }

//         console.log("Collected Tributaries by Municipality:", tributaryDict);

//         return tributaryDict;
//     } catch (error) {
//         console.error("❌ Error initializing forecast fetch:", error);
//     }
// });

// async function fetchForecastData(tributaryDict) {
//     const allTributaries = [
//         "Calumala Creek 1", "Calumala Creek 2", "Bancoro Creek", "Tagudtod Creek",
//         "Pansipit River", "Agoncillo Creek 1", "Agoncillo Creek 2", "Agoncillo Creek 3",
//         "Bilibinwang Creek 1", "Bilibinwang Creek 2", "Buso-buso Stream 1", "Buso-buso Stream 2",
//         "Buso-buso Stream 3", "Buso-buso Stream 4", "Gulod Stream 3", "Gulod Stream 4",
//         "Gulod Stream 5", "Gulod Stream 6", "Gulod Stream 7", "Laurel River 1",
//         "Molinete Creek 2", "Balakilong Creek", "Berinayan Creek", "Sampaloc Creek 1",
//         "Sampaloc Creek 2", "Banga Creek", "Lambingan River", "Tumaway River",
//         "Bignay Creek", "Caloocan Creek", "Ambulong Stream 2", "Ambulong Stream 3",
//         "Wawa River", "Balete River", "Palsara River", "Kinalaglagan River", "Bulaklakan River"
//     ];

//     fetch("/api/forecast", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ tributary: allTributaries })  // Send all tributary names
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (!data.forecasts || data.forecasts.length === 0) {
//             alert("No forecast data available.");
//             return;
//         }

//     })
//     .catch(error => console.error("Error fetching forecast:", error));
// }

// function updateWindInfo(tributary, windSpeed, windDirection) {
//     const windInfoContainer = document.getElementById("wind-info");

//     if (!windInfoContainer) {
//         console.error("❌ Error: 'wind-info' container not found.");
//         return;
//     }

//     // Clear previous data
//     windInfoContainer.innerHTML = `<p><strong>${tributary}:</strong> Speed: ${windSpeed} km/h, Direction: ${windDirection}°</p>`;
// }

// function updateForecastChart(forecastData) {
//     const canvas = document.getElementById("forecastChart");

//     if (!canvas) {
//         console.error("❌ Error: 'forecastChart' not found in the DOM.");
//         return;
//     }

//     const ctx = canvas.getContext("2d");

//     // Destroy previous chart if it exists
//     if (window.myChart) {
//         window.myChart.destroy();
//     }

//     // Format date labels to show only Month & Day
//     const labels = forecastData.map(entry => {
//         const date = new Date(entry.ds);
//         return date.toLocaleDateString("en-US", { month: "short", day: "numeric" }); // Example: "Mar 15"
//     });

//     const predictions = forecastData.map(entry => entry.yhat);

//     window.myChart = new Chart(ctx, {
//         type: "line",
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: "Forecasted Values",
//                 data: predictions,
//                 borderColor: "#000080",
//                 borderWidth: 2,
//                 fill: true, // Light fill color
//                 pointBorderColor: "#000080", // Change the border color of the dots
//                 pointRadius: 3, // Adjust the size of the dots
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false
//         }
//     });
// }

// function updateWindInfo(tributary, windSpeed, windDirection) {
//     const windInfoContainer = document.getElementById("wind-info");

//     if (!windInfoContainer) {
//         console.error("❌ Error: 'wind-info' container not found.");
//         return;
//     }

//     // Clear previous data
//     windInfoContainer.innerHTML = `<p><strong>${tributary}:</strong> Speed: ${windSpeed} km/h, Direction: ${windDirection}°</p>`;
// }

// function updateForecastChart(forecastData) {
//     const canvas = document.getElementById("forecastChart");

//     if (!canvas) {
//         console.error("❌ Error: 'forecastChart' not found in the DOM.");
//         return;
//     }

//     const ctx = canvas.getContext("2d");

//     // Destroy previous chart if it exists
//     if (window.myChart) {
//         window.myChart.destroy();
//     }

//     // Format date labels to show only Month & Day
//     const labels = forecastData.map(entry => {
//         const date = new Date(entry.ds);
//         return date.toLocaleDateString("en-US", { month: "short", day: "numeric" }); // Example: "Mar 15"
//     });

//     const predictions = forecastData.map(entry => entry.yhat);

//     window.myChart = new Chart(ctx, {
//         type: "line",
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: "Forecasted Values",
//                 data: predictions,
//                 borderColor: "#000080",
//                 borderWidth: 2,
//                 fill: true, // Light fill color
//                 pointBorderColor: "#000080", // Change the border color of the dots
//                 pointRadius: 3, // Adjust the size of the dots
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false
//         }
//     });
// }



// 
// try {

    
//     // Step 1: Get the username
//     const username = await fetchUserMunicipality();
//     if (!username) {
//         console.error("❌ Username not found");
//         return null;
//     }
//     console.log("✅ Fetched Username:", username);

//     // Step 2: Fetch municipality_name based on username
//     const userResponse = await fetch(`/public/php/getTributaries.php?user=${encodeURIComponent(username)}`);
//     const userData = await userResponse.json();
//     if (!userData || !Array.isArray(userData) || userData.length === 0) {
//         console.error("❌ No municipality found for user");
//         return null;
//     }
    
//     // Extract unique municipality names
//     const municipalities = [...new Set(userData.map(item => item.municipality_name))];
//     console.log("✅ Extracted Municipalities:", municipalities);

//     if (municipalities.length === 0) {
//         console.error("❌ No valid municipalities found");
//         return null;
//     }

//     let allTributaries = [];

//     // Step 3: Fetch tributaries for each municipality
//     for (const municipality of municipalities) {
//         console.log(`📡 Fetching tributaries for: ${municipality}`);
//         const muniResponse = await fetch(`/public/php/getTributaries.php?municipality_name=${encodeURIComponent(municipality)}`);
//         const municipalityData = await muniResponse.json();

//         if (municipalityData && Array.isArray(municipalityData)) {
//             allTributaries.push(...municipalityData.map(item => item.tributary));
//         }
//     }

//     // Remove duplicates
//     allTributaries = [...new Set(allTributaries)];
//     console.log("✅ Collected Tributaries:", allTributaries);

//     if (allTributaries.length === 0) {
//         console.error("❌ No tributaries found");
//         return null;
//     }

//     // Step 4: Send tributary list to Flask API
//     const forecastResponse = await fetch("http://127.0.0.1:5000/api/get_forecast", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ tributaries: allTributaries }) // Send as JSON object
//     });

//     const forecastData = await forecastResponse.json();
//     console.log("✅ Forecast Response:", forecastData);

//     if (forecastData.error) {
//         console.error(`❌ Error from Flask API:`, forecastData.error);
//         alert(`⚠️ ${forecastData.error}`);
//         return;
//     }

//     // Step 5: Handle multiple tributaries
//     for (const tributary in forecastData) {
//         if (!forecastData[tributary].forecast) {
//             console.error(`❌ No forecast data for ${tributary}`);
//             alert(`⚠️ No forecast data available for ${tributary}.`);
//             continue;
//         }

//         // Extract wind data
//         const windSpeed = forecastData[tributary].wind_speed || "N/A";
//         const windDirection = forecastData[tributary].wind_direction || "N/A";
//         console.log(`🌬️ Wind Data for ${tributary} - Speed: ${windSpeed}, Direction: ${windDirection}`);

//         // Update chart and UI
//         updateForecastChart(forecastData[tributary].forecast, tributary);
//         updateWindInfo(tributary, windSpeed, windDirection);
//     }

// } catch (error) {
//     console.error(`❌ Error fetching forecast:`, error);
//     alert(`⚠️ Failed to fetch forecast. Check console for details.`);
// }






// //////////////////////////////////////////////









// //======================================================//
async function fetchRainData(selectedTributary) {

    let url = `/public/php/get_rain_data.php?tributary=${encodeURIComponent(selectedTributary)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error("Error fetching data:", data.error);
            return;
        }

        plotRainChart(data.rain_data, selectedTributary);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

function showRainAlert(selectedTributary) {
    document.getElementById("rainTributaryName").textContent = selectedTributary;
    document.getElementById("rainAlertPopup").style.display = "flex";
}

function showHistoricalDataAlert(selectedTributary) {
    document.getElementById("historicalTributaryName").textContent = selectedTributary;
    document.getElementById("historicalDataAlertPopup").style.display = "flex";
}

function showTributaryAlert(){
    // document.getElementById("tributarySelectAlertPopup").style.display = "flex";
    document.getElementById("tributarySelectAlertPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("rainAlertPopup").style.display = "none";
    document.getElementById("historicalDataAlertPopup").style.display = "none";
    document.getElementById("tributarySelectAlertPopup").style.display = "none";
}





function plotRainChart(rainData, selectedTributary) {
    if (!rainData || rainData.length === 0) {
        // alert(`No rain data available for ${tributaryName}.`);
        showRainAlert(selectedTributary);
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
                label: `Rainfall Data for ${selectedTributary}`,
                data: values,
                borderColor: "rgb(45, 139, 186)",
                backgroundColor: "rgba(108, 229, 232,0.2)",
                fill: true,
                tension: 0.4, // Adjust tension for curve
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: "Timestamp", font: {weight: "bold", size: 14} } },
                y: { title: { display: true, text: "Rainfall (mm)", font: {weight: "bold", size: 14} } }
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



function formatDateTime(date) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();

    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, '0');

    let amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format

    return {
        date: `${month} ${day}, ${year}`,
        time: `${hours}:${minutes} ${amPm}`
    };
}

document.addEventListener("DOMContentLoaded", function () {
    // const rightTitle = document.getElementsByClassName("rightTitle");
    // if(rightTitle === "Ngayong araw"){
    //     document.getElementsByClassName("rightTitle").style.fontSize = "1rem";
    // }

    fetch("/public/php/accuweather_api.php")
        .then(response => response.json()) // Convert to JSON
        .then(data => {
            let dataList = document.getElementById("dataList");
            dataList.innerHTML = ""; // Clear previous content

            Object.keys(data).forEach(location => {
                let weather = data[location];
                let listItem = document.createElement("li");

                if (weather.error) {
                    listItem.textContent = `${location}: ERROR - ${weather.error}`;
                } else {
                    listItem.innerHTML = `
                    <b>${location}:</b><br>
                    Temperature: ${weather.temperature}<br>
                    Wind Speed: ${weather.wind_speed !== "N/A" ? weather.wind_speed : "No data"} 
                    (${weather.wind_direction !== "N/A" ? weather.wind_direction : "No direction"})<br>
                    Weather: ${weather.weather_text}
                `;
                }

                dataList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching weather data:", error));
});
///////////////////////

// function fetchAllRainfallData() {
//     fetch('/public/php/get_rainfall_monitoring.php')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(result => {
//             if (!Array.isArray(result) || result.length === 0) {
//                 document.getElementById('dataList').innerHTML = `
//                     <li>
//                         <div>No Rainfall data available.</div>
//                     </li>
//                     <hr>
//                 `;
//                 return;
//             }

//             processRainfallData(result);
//         })
//         .catch(error => console.error('Error fetching rainfall data:', error));
// }

// function processRainfallData(data) {
//     if (data.length === 0) return;

//     data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

//     let now = new Date();

//     let currentIntervalEnd = new Date(now);
//     let currentIntervalStart = new Date(currentIntervalEnd);
//     currentIntervalStart.setHours(currentIntervalStart.getHours() - 6);

//     let intervals = [];
//     let intervalData = [];

//     let firstTimestamp = new Date(data[0].timestamp);

//     while (currentIntervalEnd >= firstTimestamp) {
//         let tempData = data.filter(entry => {
//             let entryTime = new Date(entry.timestamp);
//             return entryTime >= currentIntervalStart && entryTime < currentIntervalEnd;
//         });

//         intervals.push({
//             start: new Date(currentIntervalStart),
//             end: new Date(currentIntervalEnd),
//             data: tempData
//         });

//         // Move to the previous 6-hour interval
//         currentIntervalEnd = new Date(currentIntervalStart);
//         currentIntervalStart.setHours(currentIntervalStart.getHours() - 6);
//     }

//     displayIntervals(intervals);
// }

// async function displayIntervals(intervals) {
//     try {
//         const municipalityName = await fetchUserMunicipality(); // Get municipality from user data

//         if (!municipalityName) {
//             console.error("Municipality not found for the user.");
//             return []; // Return an empty array instead of undefined
//         }

//         // Fetch tributaries based on municipality
//         const response = await fetch(`/public/php/getTributaries.php?municipality=${encodeURIComponent(municipalityName)}`);
//         const data = await response.json();

//         if (data.error) {
//             console.error("Error:", data.error);
//             return []; // Return an empty array in case of an error
//         }

//         // Store tributaries in an array and sort them alphabetically
//         let tributariesArray = data.sort((a, b) => a.localeCompare(b));

//         // Log the sorted array
//         console.log("Sorted Tributaries:", tributariesArray);

//         // return tributariesArray; // ✅ Now it explicitly returns an array\
//         document.getElementById('dataList').innerHTML = '';
//         intervals.forEach((interval, index) => {
//             let intervalStart = formatDateTime(interval.start);
//             let intervalEnd = formatDateTime(interval.end);
    
//             document.getElementById('dataList').innerHTML += `
//                 <h5>Rainfall Data From: </h5>
//                 <h6>${intervalStart.date} ${intervalStart.time}
//                     To 
//                     ${intervalEnd.date} ${intervalEnd.time}
//                 </h6>
//                 <hr>
//             `;
    
//             tributariesArray.forEach(tributary => {
//                 let tribData = interval.data.filter(entry => entry.tributary === tributary);
    
//                 if (tribData.length === 0) {
//                     document.getElementById('dataList').innerHTML += `
//                         <li>
//                             <div>No Rainfall data for the last 6 hours.</div>
//                             <div><strong>Date:</strong> ${formatDateTime(interval.end).date}</div>
//                             <div><strong>Tributary:</strong> ${tributary}</div>
//                         </li>
//                         <hr>
//                     `;
//                 } else {
//                     tribData.forEach(entry => {
//                         let timestamp = new Date(entry.timestamp); // Ensure it's a Date object
//                         let formattedTimestamp = formatDateTime(timestamp);
//                         document.getElementById('dataList').innerHTML += `
//                             <li>
//                                 <div>Date: ${formattedTimestamp.date}</div>
//                                 <div>Time: ${formattedTimestamp.time}</div>
//                                 <div><strong>Rainfall Value:</strong> ${entry.rainfall_value} mm</div>
//                                 <div><strong>Tributary:</strong> ${entry.tributary}</div>
//                             </li>
//                             <hr>
//                         `;
//                     });
//                 }
//             });
//         });


        
//     } catch (error) {
//         console.error("Fetch Error (Tributaries):", error);
//         return []; // Return an empty array if an error occurs
//     }

//     console.log("Rainfall data displayed in 6-hour intervals.");

// }

// // Example usag
// document.addEventListener("DOMContentLoaded", displayIntervals);


//////////////////////////////////////////////////////////////////

$(document).ready(function () {
    // Fetch user data
    $.ajax({
        url: './php/userdata.php',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            if (!response.error) {
                if(response.username === "MATAASNAKAHOY") {
                    document.getElementById("userDropdown").style.fontSize = "1.3rem";
                }
                $("#userDropdown").text(response.username);
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
