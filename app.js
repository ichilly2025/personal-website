/**
 * 个人网站 - 交互逻辑模块
 * 包含技能图标墙自动滚动、表单处理、导航交互等功能
 * @file app.js
 * @version 1.0.0
 */

// 等待DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('个人网站初始化...');
    
    // 初始化所有模块
    initNavigation();
    initSkillWall();
    initProjectCards();
    initContactForm();
    initScrollAnimations();
    initThemeToggle();
    
    console.log('个人网站初始化完成');
});

/**
 * 初始化导航栏交互
 */
function initNavigation() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!nav) {
        console.warn('导航栏元素未找到');
        return;
    }
    
    // 滚动时添加/移除导航栏背景
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('bg-slate-900/90', 'backdrop-blur-md');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('bg-slate-900/90', 'backdrop-blur-md');
            nav.classList.add('bg-transparent');
        }
    });
    
    // 平滑滚动到锚点
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // 关闭移动端菜单（如果打开）
                if (mobileMenu && mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                // 平滑滚动到目标元素
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 移动端菜单切换
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // 切换图标
            const icon = this.querySelector('svg');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
                } else {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
                }
            }
        });
        
        // 点击菜单外区域关闭菜单
        document.addEventListener('click', function(e) {
            if (!mobileMenu.classList.contains('hidden') && 
                !mobileMenu.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('svg');
                if (icon) {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
                }
            }
        });
    }
}

/**
 * 初始化技能图标墙自动滚动
 */
function initSkillWall() {
    const skillWall = document.getElementById('skill-wall');
    if (!skillWall) {
        console.warn('技能图标墙元素未找到');
        return;
    }
    
    // 克隆技能项以实现无缝滚动
    const skillItems = skillWall.querySelectorAll('.skill-item');
    if (skillItems.length === 0) {
        console.warn('未找到技能项');
        return;
    }
    
    // 创建克隆节点
    skillItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        skillWall.appendChild(clone);
    });
    
    // 设置动画
    skillWall.style.animation = 'scrollSkills 30s linear infinite';
    
    // 鼠标悬停时暂停动画
    skillWall.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    skillWall.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
    
    // 触摸设备支持
    let isTouching = false;
    skillWall.addEventListener('touchstart', function() {
        this.style.animationPlayState = 'paused';
        isTouching = true;
    });
    
    skillWall.addEventListener('touchend', function() {
        if (isTouching) {
            setTimeout(() => {
                this.style.animationPlayState = 'running';
                isTouching = false;
            }, 1000);
        }
    });
}

/**
 * 初始化项目卡片交互
 */
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // 鼠标移动时的3D效果
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 25;
            const rotateX = (centerY - y) / 25;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        // 鼠标离开时重置
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        // 触摸设备支持
        card.addEventListener('touchstart', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1.05, 1.05, 1.05)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
        
        // 点击项目链接
        const projectLink = card.querySelector('a[href^="#"]');
        if (projectLink) {
            projectLink.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    });
}

/**
 * 初始化联系表单处理
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) {
        console.warn('联系表单元素未找到');
        return;
    }
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : '发送消息';
    
    // 表单提交处理
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        // 禁用提交按钮并显示加载状态
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin h-5 w-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                发送中...
            `;
        }
        
        try {
            // 模拟API调用
            await simulateFormSubmission();
            
            // 显示成功消息
            showFormMessage('消息发送成功！我会尽快回复您。', 'success');
            
            // 重置表单
            contactForm.reset();
            
        } catch (error) {
            console.error('表单提交失败:', error);
            showFormMessage('发送失败，请稍后重试或直接通过邮箱联系。', 'error');
            
        } finally {
            // 恢复提交按钮
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        }
    });
    
    /**
     * 表单验证
     */
    function validateForm() {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // 清除之前的错误状态
        clearFormErrors();
        
        // 验证姓名
        if (!name.value.trim()) {
            showFieldError(name, '请输入您的姓名');
            isValid = false;
        }
        
        // 验证邮箱
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showFieldError(email, '请输入您的邮箱');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showFieldError(email, '请输入有效的邮箱地址');
            isValid = false;
        }
        
        // 验证消息
        if (!message.value.trim()) {
            showFieldError(message, '请输入您的消息');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showFieldError(message, '消息内容至少需要10个字符');
            isValid = false;
        }
        
        return isValid;
    }
    
    /**
     * 显示字段错误
     */
    function showFieldError(field, message) {
        field.classList.add('border-red-500');
        field.classList.remove('border-slate-700');
        
        // 创建错误消息元素
        const errorDiv = document.createElement('div');
        errorDiv.className = 'text-red-400 text-sm mt-1';
        errorDiv.textContent = message;
        
        // 插入到字段后面
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }
    
    /**
     * 清除表单错误状态
     */
    function clearFormErrors() {
        // 清除字段错误样式
        const fields = contactForm.querySelectorAll('input, textarea');
        fields.forEach(field => {
            field.classList.remove('border-red-500');
            field.classList.add('border-slate-700');
        });
        
        // 移除错误消息
        const errorMessages = contactForm.querySelectorAll('.text-red-400');
        errorMessages.forEach(msg => msg.remove());
    }
    
    /**
     * 显示表单消息
     */
    function showFormMessage(message, type) {
        // 移除之前的消息
        const existingMessage = document.getElementById('form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // 创建消息元素
        const messageDiv = document.createElement('div');
        messageDiv.id = 'form-message';
        messageDiv.className = `mt-4 p-4 rounded-lg ${
            type === 'success' 
                ? 'bg-green-900/30 text-green-400 border border-green-800' 
                : 'bg-red-900/30 text-red-400 border border-red-800'
        }`;
        messageDiv.textContent = message;
        
        // 插入到表单前面
        contactForm.parentNode.insertBefore(messageDiv, contactForm);
        
        // 5秒后自动移除
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
    
    /**
     * 模拟表单提交
     */
    function simulateFormSubmission() {
        return new Promise((resolve, reject) => {
            // 模拟网络延迟
            setTimeout(() => {
                // 90%的成功率
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('模拟网络错误'));
                }
            }, 1500);
        });
    }
}

/**
 * 初始化滚动动画
 */
function initScrollAnimations() {
    // 使用Intersection Observer API实现滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    // 节流滚动事件
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    /**
     * 更新活动导航链接
     */
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-blue-400', 'border-blue-400');
            link.classList.add('text-slate-300', 'border-transparent');
            
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.remove('text-slate-300', 'border-transparent');
                link.classList.add('text-blue-400', 'border-blue-400');
            }
        });
    }
}

/**
 * 初始化主题切换
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    // 检查本地存储的主题偏好
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 设置初始主题
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        document.documentElement.classList.remove('dark');
        updateThemeIcon('light');
    } else {
        document.documentElement.classList.add('dark');
        updateThemeIcon('dark');
    }
    
    // 切换主题
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        }
    });
    
    /**
     * 更新主题图标
     */
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('svg');
        if (!icon) return;
        
        if (theme === 'light') {
            icon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            `;
        } else {
            icon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            `;
        }
    }
}

/**
 * 工具函数：防抖
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 工具函数：节流
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 导出函数供全局使用（如果需要）
window.PersonalWebsite = {
    initNavigation,
    initSkillWall,
    initProjectCards,
    initContactForm,
    initScrollAnimations,
    initThemeToggle
};