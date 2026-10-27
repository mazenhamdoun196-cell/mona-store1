// كود جافا سكريبت ذكي لإضافة تأثير الهالة الضوئية البمبي (Pink Glow) المتحركة ببطء في الخلفية
document.addEventListener("DOMContentLoaded", () => {
    // إنشاء عنصر الإضاءة
    const glowEffect = document.createElement("div");
    
    // تنسيق الإضاءة وتنعيمها خلف الكواليس
    glowEffect.style.position = "fixed";
    glowEffect.style.top = "-10%";
    glowEffect.style.left = "-10%";
    glowEffect.style.width = "120%";
    glowEffect.style.height = "120%";
    glowEffect.style.background = "radial-gradient(circle at 50% 30%, rgba(255, 192, 203, 0.25) 0%, rgba(255, 255, 255, 0) 70%)";
    glowEffect.style.pointerEvents = "none"; // لكي لا يمنع الضغط على الأزرار
    glowEffect.style.zIndex = "1"; // خلف النصوص والبوابات وأمام الخلفية البيضاء
    glowEffect.style.transition = "background 4s ease-in-out";

    // إضافة التأثير داخل الصفحة
    document.body.appendChild(glowEffect);

    // دالة لتغيير مكان الإضاءة ببطء ونعومة تامة كل 4 ثوانٍ ليعطي حيوية للموقع
    setInterval(() => {
        const dynamicX = Math.random() * 20 + 40; // حركة عشوائية بين 40% و 60% أفقياً
        const dynamicY = Math.random() * 20 + 20; // حركة عشوائية بين 20% و 40% رأسياً
        glowEffect.style.background = `radial-gradient(circle at ${dynamicX}% ${dynamicY}%, rgba(255, 182, 193, 0.3) 0%, rgba(255, 255, 255, 0) 65%)`;
    }, 4000);
});
