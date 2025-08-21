// 这里编写自定义js脚本；将被静态引入到页面中
var OriginTitile = document.title;
var jiao;

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === undefined || document.visibilityState === 'visible') {
        document.title = '(*^_^*)欢迎肥来！' + OriginTitile;
        jiao = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    } else {
        document.title = '你怎么跑啦w(ﾟДﾟ)w';
        clearTimeout(jiao);
    }
});


/**
 * 鼠标特效实现
 */
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否已存在光标元素，避免重复创建
    if (document.querySelector('.cursor-dot') || document.querySelector('.cursor-outline')) {
        return;
    }
    
    // 创建自定义光标元素
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');
    
    cursorDot.classList.add('cursor-dot');
    cursorOutline.classList.add('cursor-outline');
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
    
    // 鼠标移动事件处理
    document.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        // 更新小点光标位置
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // 让外环光标有延迟跟随效果，增强层次感
        setTimeout(() => {
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        }, 100);
        
        // 创建轨迹效果
        createTrail(posX, posY);
    });
    
    // 创建鼠标轨迹
    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        
        // 随机大小
        const size = Math.random() * 20 + 10;
        trail.style.width = `${size}px`;
        trail.style.height = `${size}px`;
        
        // 位置
        trail.style.left = `${x - size/2}px`;
        trail.style.top = `${y - size/2}px`;
        
        // 根据位置设置不同颜色
        const hue = (x / window.innerWidth) * 360;
        trail.style.background = `radial-gradient(circle, hsla(${hue}, 80%, 60%, 0.6) 0%, hsla(${hue}, 80%, 60%, 0) 70%)`;
        
        document.body.appendChild(trail);
        
        // 轨迹淡出动画
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            trail.style.transform = 'scale(2)';
            
            // 移除轨迹元素
            setTimeout(() => {
                trail.remove();
            }, 500);
        }, 100);
    }
    
    // 点击粒子效果
    document.addEventListener('click', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        // 创建波纹效果
        createRipple(posX, posY);
        
        // 确定粒子颜色 - 根据点击位置
        let particleColor;
        const target = e.target;
        
        // 检查是否点击在按钮上
        if (target.tagName === 'BUTTON' || target.closest('button')) {
            const btn = target.tagName === 'BUTTON' ? target : target.closest('button');
            // 根据按钮类名或ID确定颜色
            if (btn.id.includes('primary') || btn.classList.contains('bg-primary')) {
                particleColor = '#6C5CE7';
            } else if (btn.id.includes('secondary') || btn.classList.contains('bg-secondary')) {
                particleColor = '#00F5D4';
            } else if (btn.id.includes('accent') || btn.classList.contains('bg-accent')) {
                particleColor = '#FD79A8';
            } else if (btn.id.includes('special')) {
                // 特殊按钮使用彩虹色粒子
                createRainbowParticles(posX, posY);
                return;
            } else {
                particleColor = '#ffffff';
            }
        } else {
            // 其他区域根据位置使用渐变色
            const hue = (posX / window.innerWidth) * 360;
            particleColor = `hsl(${hue}, 80%, 60%)`;
        }
        
        // 创建粒子
        createParticles(posX, posY, 20, particleColor);
    });
    
    // 创建波纹效果
    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        
        // 设置波纹大小
        const size = Math.random() * 50 + 100;
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        
        // 设置位置
        ripple.style.left = `${x - size/2}px`;
        ripple.style.top = `${y - size/2}px`;
        
        document.body.appendChild(ripple);
        
        // 动画结束后移除
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // 创建粒子效果
    function createParticles(x, y, count, color) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // 随机粒子大小
            const size = Math.random() * 8 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.borderRadius = '50%';
            
            // 位置
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            
            document.body.appendChild(particle);
            
            // 随机方向和距离
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 80 + 40;
            const destX = x + Math.cos(angle) * distance;
            const destY = y + Math.sin(angle) * distance;
            
            // 动画
            particle.style.transition = `all ${Math.random() * 0.6 + 0.4}s ease-out`;
            
            setTimeout(() => {
                particle.style.transform = `translate(${destX - x}px, ${destY - y}px)`;
                particle.style.opacity = '0';
                
                // 动画结束后移除
                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }, 10);
        }
    }
    
    // 创建彩虹色粒子
    function createRainbowParticles(x, y) {
        const colors = [
            '#6C5CE7', '#00F5D4', '#FD79A8', 
            '#FFEAA7', '#74B9FF', '#00B894'
        ];
        
        for (let i = 0; i < 30; i++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            createParticles(x, y, 1, color);
        }
    }
    
    // 为交互元素添加光标变化效果
    const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], [onclick], [cursor="pointer"], [class*="hover"], [class*="group-hover"], [class*="cursor-pointer"]'
    );
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '50px';
            cursorOutline.style.height = '50px';
            cursorOutline.style.borderColor = 'rgba(108, 92, 231, 0.7)';
            cursorDot.style.backgroundColor = '#6C5CE7';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '30px';
            cursorOutline.style.height = '30px';
            cursorOutline.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            cursorDot.style.backgroundColor = 'white';
        });
    });
    
    // 特殊区域光标效果
    const specialAreas = document.querySelectorAll('.bg-gray-800/30, .notion-callout, .notion-quote');
    specialAreas.forEach(area => {
        area.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.borderColor = 'rgba(108, 92, 231, 0.5)';
        });
        
        area.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '30px';
            cursorOutline.style.height = '30px';
            cursorOutline.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        });
    });
});
