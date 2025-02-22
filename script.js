// Kiểm tra khi tải trang nếu đã có tài khoản và mật khẩu trong localStorage
document.addEventListener('DOMContentLoaded', function () {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    
    // Nếu có tài khoản đã lưu, tự động điền tên đăng nhập và mật khẩu vào form đăng nhập
    if (savedUsername && savedPassword) {
        document.getElementById('login-username').value = savedUsername;
        document.getElementById('login-password').value = savedPassword;
        document.getElementById('remember-password').checked = true;
    }

    // Hiển thị tên máy và FPS khi trang được tải
    displayMachineInfo();
    startFPSTracking();
});

// Hàm hiển thị thông tin về tên máy
function displayMachineInfo() {
    const machineName = navigator.platform; // Lấy thông tin hệ điều hành người dùng
    document.getElementById('machine-name').innerText = machineName;
}

// Hàm tính FPS
let lastFrameTime = 0;
let frameCount = 0;
let fps = 0;

function startFPSTracking() {
    function updateFPS(timestamp) {
        frameCount++;
        if (timestamp - lastFrameTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastFrameTime = timestamp;
            document.getElementById('fps').innerText = fps;
        }
        requestAnimationFrame(updateFPS);
    }
    requestAnimationFrame(updateFPS);
}

// Hàm hiển thị form tạo tài khoản
function showSignupForm() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

// Hàm hiển thị form đăng nhập
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

// Hàm tạo tài khoản
function createAccount() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    
    if (username && password) {
        // Lưu tài khoản và mật khẩu vào localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        alert("Tạo tài khoản thành công!");
        
        // Chuyển sang màn hình đăng nhập
        showLoginForm();
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
}

// Hàm đăng nhập
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Kiểm tra tài khoản và mật khẩu
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        alert("Đăng nhập thành công!");
        
        // Nếu người dùng chọn "Lưu mật khẩu", lưu lại tài khoản và mật khẩu trong localStorage
        if (document.getElementById('remember-password').checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        }

        // Chuyển sang màn hình menu sau khi đăng nhập thành công
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
}

// Hàm nhập game
function enterGame() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

// Hàm liên hệ người bán
function contactSeller() {
    alert("Liên hệ người bán qua email: seller@example.com");
}

// Hàm hiển thị game Free Fire Max
function showFreeFireMax() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('selected-game').style.display = 'block';
    document.getElementById('game-name').innerText = "Free Fire Max";
    document.getElementById('game-logo').src = "https://upload.wikimedia.org/wikipedia/commons/2/22/Free_Fire_Max_Logo.png";
    showSwitchOptions();
}

// Hàm hiển thị game Free Fire
function showFreeFire() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('selected-game').style.display = 'block';
    document.getElementById('game-name').innerText = "Free Fire";
    document.getElementById('game-logo').src = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Free_Fire_Logo.png";
    showSwitchOptions();
}

// Hàm hiển thị các chức năng chuyển đổi (switch)
function showSwitchOptions() {
    document.getElementById('selected-game').style.display = 'none';
    document.getElementById('switch-container').style.display = 'block';
}

// Hàm hiển thị thông báo thành công
function showNotification(message) {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notification-message');
    
    messageElement.innerText = message;
    notification.style.display = 'block';
    
    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Hàm bật/tắt trạng thái của các chức năng switch
function toggleSwitch(switchNumber) {
    const switchElement = document.getElementById(`switch${switchNumber}`);
    switchElement.classList.toggle('active');
    
    // Hiển thị thông báo thành công khi ấn vào chức năng
    showNotification(`Chức Năng ${switchNumber} đã được bật!`);
}