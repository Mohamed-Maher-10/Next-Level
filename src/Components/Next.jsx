import React, { useState } from 'react';

// لوحة الألوان الداكنة والمودرن (Dark Modern Theme)
const colors = {
  bgDark: '#0b0f19',       // الخلفية الأساسية للموقع (Dark Navy/Black)
  cardDark: '#131a26',     // خلفية الكروت والفورم (Sleek Gray/Blue)
  accentNeon: '#38bdf8',   // الأزرق المضيء للنصوص المميزة والروابط
  buttonGlow: '#10b981',   // الأخضر الفسفوري للأزرار الأساسية
  textMain: '#f8fafc',     // الأبيض الناصع للعناوين
  textMuted: '#94a3b8',    // الرمادي الهادئ للنصوص الفرعية
  border: '#1e293b'        // حدود العناصر الخفيفة
};

export default function NextLevelApp() {
  // الـ State الخاص بالفورم
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'React UI Development'
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ضع رابط الجوجل فورم الخاص بك هنا (ينتهي بـ formResponse)
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXX/formResponse";

    const data = new FormData();
    // استبدل الـ entry IDs بالأرقام الحقيقية التي استخرجتها من حقول جوجل فورم
    data.append("entry.111111111", formData.name);  
    data.append("entry.222222222", formData.phone); 
    data.append("entry.333333333", formData.course);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors", 
    })
    .then(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', course: 'React UI Development' });
    })
    .catch((err) => {
      console.error("Error:", err);
      setLoading(false);
    });
  };

  return (
    <div style={{ fontFamily: 'Cairo, sans-serif', backgroundColor: colors.bgDark, direction: 'rtl', color: colors.textMain, minHeight: '100vh', scrollBehavior: 'smooth' }}>
      
      {/* 1. الهيدر المودرن (Navbar) */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: 'rgba(11, 15, 25, 0.8)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ fontSize: '1.6rem', fontWeight: '800', letterSpacing: '1px' }}>
          NEXT <span style={{ color: colors.accentNeon, textShadow: `0 0 10px ${colors.accentNeon}44` }}>LEVEL</span>
        </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#home" style={{ textDecoration: 'none', color: colors.textMuted, fontWeight: '500', transition: '0.3s' }}>الرئيسية</a>
          <a href="#courses" style={{ textDecoration: 'none', color: colors.textMuted, fontWeight: '500' }}>الكورسات</a>
          <a href="#register" style={{ textDecoration: 'none', color: colors.textMuted, fontWeight: '500' }}>التسجيل السريع</a>
        </div>
        <a href="#register" style={{ border: `1px solid ${colors.accentNeon}`, color: colors.accentNeon, padding: '8px 20px', borderRadius: '20px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold', transition: '0.3s', boxShadow: `0 0 10px ${colors.accentNeon}22` }}>
          انضم إلينا
        </a>
      </nav>

      {/* 2. الجزء الرئيسي المضيء (Hero Section) */}
      <section id="home" style={{ padding: '120px 20px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* تأثير توهج في الخلفية الخلفية */}
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translate(-50%, 0)', width: '400px', height: '400px', background: `radial-gradient(circle, ${colors.accentNeon}15 0%, transparent 70%)`, filter: 'blur(40px)', zIndex: 0 }}></div>

        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '25px', lineHeight: '1.3', position: 'relative', zIndex: 1 }}>
          طور مهاراتك إلى <span style={{ background: `linear-gradient(to left, ${colors.accentNeon}, #a855f7)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>الـ Next Level</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: colors.textMuted, maxWidth: '650px', margin: '0 auto 45px', lineHeight: '1.8', position: 'relative', zIndex: 1 }}>
          لا تكتفِ بالتعلم النظري. ابنِ مشاريع حقيقية تضعك في صدارة سوق العمل مع خبراء البرمجة والتطوير.
        </p>
        <a href="#courses" style={{ position: 'relative', zIndex: 1, backgroundColor: colors.accentNeon, color: '#000', padding: '16px 45px', borderRadius: '30px', textDecoration: 'none', fontWeight: '800', fontSize: '1.05rem', boxShadow: `0 4px 20px ${colors.accentNeon}55` }}>
          تصفح مسارات 2026 ⚡
        </a>
      </section>

      {/* 3. معرض الكورسات الاحترافي (Courses) */}
      <section id="courses" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '2.4rem', fontWeight: '800' }}>المسارات المتاحة</h2>
        <p style={{ textAlign: 'center', color: colors.textMuted, marginBottom: '60px' }}>مسارات متكاملة تأخذك من الصفر للاحتراف الكامل</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '35px' }}>
          
          {/* كارت كورس 1 */}
          <div style={{ backgroundColor: colors.cardDark, borderRadius: '20px', overflow: 'hidden', border: `1px solid ${colors.border}`, boxShadow: '0 10px 30px rgba(0,0,0,0.3)', transition: '0.3s' }}>
            <div style={{ height: '160px', background: 'linear-gradient(45deg, #0284c7, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2.5rem', fontWeight: '900', letterSpacing: '1px' }}>React UI</div>
            <div style={{ padding: '30px' }}>
              <span style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: colors.accentNeon, padding: '5px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>تحديث 2026 🚀</span>
              <h3 style={{ marginTop: '15px', marginBottom: '12px', fontSize: '1.4rem', fontWeight: '700' }}>احتراف واجهات المستخدم بـ React</h3>
              <p style={{ color: colors.textMuted, fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '25px' }}>بناء تطبيقات ويب فائقة السرعة مع إدارة الـ State المعقدة بأساليب متطورة وعصرية.</p>
              <a href="#register" onClick={() => setFormData({...formData, course: 'React UI Development'})} style={{ display: 'block', textAlign: 'center', backgroundColor: 'transparent', color: '#fff', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', border: `1px solid ${colors.border}` }}>حجز المقعد الآن</a>
            </div>
          </div>

          {/* كارت كورس 2 */}
          <div style={{ backgroundColor: colors.cardDark, borderRadius: '20px', overflow: 'hidden', border: `1px solid ${colors.border}`, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <div style={{ height: '160px', background: 'linear-gradient(45deg, #4f46e5, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2.5rem', fontWeight: '900', letterSpacing: '1px' }}>Node.js</div>
            <div style={{ padding: '30px' }}>
              <span style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#a855f7', padding: '5px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>مسار متقدم</span>
              <h3 style={{ marginTop: '15px', marginBottom: '12px', fontSize: '1.4rem', fontWeight: '700' }}>تطوير السيرفر والـ APIs بـ Node.js</h3>
              <p style={{ color: colors.textMuted, fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '25px' }}>تصميم قواعد بيانات مرنة وبناء خوادم قوية ومؤمنة تتحمل آلاف الزيارات المتزامنة.</p>
              <a href="#register" onClick={() => setFormData({...formData, course: 'Node.js Backend'})} style={{ display: 'block', textAlign: 'center', backgroundColor: 'transparent', color: '#fff', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', border: `1px solid ${colors.border}` }}>حجز المقعد الآن</a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. سكشن الفورم المظلم والمربوط بجوجل شيت */}
      <section id="register" style={{ padding: '100px 20px', borderTop: `1px solid ${colors.border}`, position: 'relative' }}>
        <div style={{ maxWidth: '550px', margin: '0 auto', padding: '45px', borderRadius: '24px', backgroundColor: colors.cardDark, border: `1px solid ${colors.border}`, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '12px', fontWeight: '800', fontSize: '2rem' }}>سجل مكانك الآن 🛡️</h2>
          <p style={{ textAlign: 'center', color: colors.textMuted, marginBottom: '35px', fontSize: '0.95rem' }}>املأ الاستمارة لتبدأ فوراً؛ وسيتم إرسال التفاصيل لشيت الإدارة تلقائياً.</p>
          
          {submitted ? (
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: colors.buttonGlow, padding: '20px', borderRadius: '14px', textAlign: 'center', fontWeight: 'bold', border: `1px solid ${colors.buttonGlow}` }}>
              🎉 ممتاز! تم تسجيل بياناتك بنجاح في Google Sheet وسنتصل بك على واتساب قريباً جداً.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: colors.textMain }}>الاسم الكامل</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="اسمك الثلاثي" 
                  style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', backgroundColor: '#0b0f19', border: `1px solid ${colors.border}`, color: '#fff', outline: 'none', fontSize: '1rem' }} 
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: colors.textMain }}>رقم الهاتف (واتساب)</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  placeholder="01xxxxxxxxx" 
                  style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', backgroundColor: '#0b0f19', border: `1px solid ${colors.border}`, color: '#fff', outline: 'none', fontSize: '1rem', textAlign: 'right' }} 
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: colors.textMain }}>اختر المسار البرمجي</label>
                <select 
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', backgroundColor: '#0b0f19', border: `1px solid ${colors.border}`, color: '#fff', outline: 'none', fontSize: '1rem' }}
                >
                  <option value="React UI Development" style={{ backgroundColor: colors.cardDark }}>React UI Development</option>
                  <option value="Node.js Backend" style={{ backgroundColor: colors.cardDark }}>Node.js Backend</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                style={{ backgroundColor: colors.buttonGlow, color: '#000', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: '800', fontSize: '1.1rem', cursor: 'pointer', marginTop: '15px', boxShadow: `0 4px 20px ${colors.buttonGlow}44`, transition: '0.2s' }}
              >
                {loading ? 'جاري التأمين والإرسال...' : 'تأكيد الحجز والانطلاق للـ Next Level 🚀'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 5. الفوتر (Footer) */}
      <footer style={{ backgroundColor: '#060911', color: '#475569', padding: '30px 20px', textAlign: 'center', fontSize: '0.85rem', borderTop: `1px solid ${colors.border}` }}>
        <p>© 2026 منصة NEXT LEVEL التعليمية. جميع الحقوق محفوظة.</p>
      </footer>

    </div>
  );
}