// Firebase Firestore reference
const statusRef = db.collection("status").doc("adminStatus");

// Real-time listener for status updates
statusRef.onSnapshot((doc) => {
    if (doc.exists) {
        const status = doc.data().status;
        document.getElementById("status-text").innerText = status;
        if (document.getElementById("admin-status-text")) {
            document.getElementById("admin-status-text").innerText = status;
        }
    }
});

// Admin login and status update functionality
window.addEventListener("load", function() {
    const loginPanel = document.getElementById("login-panel");
    const adminPanel = document.getElementById("admin-panel");

    // Login function
    document.getElementById("login-btn").onclick = () => {
        const email = document.getElementById("sajithanchathuranga@gmail.com").value;
        const password = document.getElementById("1234").value;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                loginPanel.classList.add("hidden");
                adminPanel.classList.remove("hidden");
            })
            .catch(error => alert("Login failed: " + error.message));
    };

    // Logout function
    document.getElementById("logout-btn").onclick = () => {
        auth.signOut().then(() => {
            loginPanel.classList.remove("hidden");
            adminPanel.classList.add("hidden");
        });
    };

    // Status update functions
    document.getElementById("online-btn").onclick = () => {
        statusRef.set({ status: "Online" });
    };

    document.getElementById("offline-btn").onclick = () => {
        statusRef.set({ status: "Offline" });
    };
});
