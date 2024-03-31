// รายชื่อผู้จัดการ
var managers = ["หัวหน้าการตลาด A", "หัวหน้าโปรแกรมเมอร์ B", "หัวหน้าUXUI C", "หัวหน้าไอที D"];

// รายชื่อเด็กฝึกงาน
var interns = ["เด็กฝึกงานการตลาด A", "เด็กฝึกงานโปรแกรมเมอร์ B", "เด็กฝึกงานUXUI C", "เด็กฝึกงานไอที D"];

// ฟังก์ชันสำหรับการสุ่มผู้จัดการและเด็กฝึกงาน
function assignWork() {
    // สุ่มผู้จัดการและเด็กฝึกงานในรายการเดียวกัน
    var index = Math.floor(Math.random() * managers.length);

    var manager = managers[index];
    var intern = interns[index];

    // แสดงผลลัพธ์ในหน้าเว็บ
    document.getElementById("managerList").innerHTML += "<li class='list-group-item'><img src='manager.png' alt='' width='50px' height='50px'>" + manager + "</li>";
    document.getElementById("internList").innerHTML += "<li class='list-group-item'><img src='internship.png' alt='' width='50px' height='50px'>" + intern + "</li>";

    // ลบผู้จัดการและเด็กฝึกงานที่ถูกสุ่มออกจากรายการ
    managers.splice(index, 1);
    interns.splice(index, 1);
}

// ฟังก์ชันสำหรับการลบผู้จัดการและเด็กฝึกงานที่ถูกสุ่มออกจากลิสต์
function removeAssignment() {
    // ลบผู้จัดการและเด็กฝึกงานล่าสุดออกจากลิสต์
    document.getElementById("managerList").lastElementChild.remove();
    document.getElementById("internList").lastElementChild.remove();

    // เพิ่มผู้จัดการและเด็กฝึกงานที่ถูกลบกลับเข้าไปในรายการ
    managers.push("หัวหน้าการตลาด A", "หัวหน้าโปรแกรมเมอร์ B", "หัวหน้าUXUI C", "หัวหน้าไอที D");
    interns.push("เด็กฝึกงานการตลาด A", "เด็กฝึกงานโปรแกรมเมอร์ B", "เด็กฝึกงานUXUI C", "เด็กฝึกงานไอที D");

    // เปิดการใช้งานปุ่ม "สุ่ม" อีกครั้ง
    document.getElementById("assignButton").disabled = false;
    document.getElementById("assignButton").innerText = "สุ่ม";
}

// กำหนดการเรียกใช้งานฟังก์ชันเมื่อคลิกปุ่ม "สุ่ม"
document.getElementById("assignButton").addEventListener("click", function () {
    // เรียกใช้งานฟังก์ชันสุ่มผู้จัดการและเด็กฝึกงาน
    assignWork();

    // เช็คเงื่อนไขหากไม่มีผู้จัดการหรือเด็กฝึกงานเหลือในรายการ
    if (managers.length === 0 || interns.length === 0) {
        document.getElementById("assignButton").disabled = true; // ปิดการใช้งานปุ่ม "สุ่ม" ถ้าไม่มีรายการเหลืออีก
        document.getElementById("assignButton").innerText = "สุ่มเสร็จสิ้น"; // เปลี่ยนข้อความบนปุ่ม
    }
});

// กำหนดการเรียกใช้งานฟังก์ชันเมื่อคลิกปุ่ม "ลบ"
document.getElementById("removeButton").addEventListener("click", function () {
    // เรียกใช้งานฟังก์ชันลบผู้จัดการและเด็กฝึกงาน
    removeAssignment();
});
