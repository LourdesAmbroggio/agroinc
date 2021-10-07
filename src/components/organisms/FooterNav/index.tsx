import * as React from 'react';
import icons from 'resources/icons';
import { EnvironmentOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { InstagramOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Layout, Row, Space, Typography } from 'antd';

const { Footer } = Layout;

const FooterNav: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='footer'>
            <Footer>
                <Row style={{ marginTop: 50, paddingLeft: 10, paddingRight: 10 }}>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Row justify='center' align='middle'>
                            <img src={icons.agroInc} />
                            <label className="footer__logo">AGROINC</label>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Row>
                            <Typography.Text className='footer__title-social'>Newsletter</Typography.Text>
                        </Row>
                        <Row style={{ height: 2, backgroundColor: '#beb31e', marginBottom: 10, width: 200 }} />
                        <Row justify='center' align='middle'>
                            <Col style={{ width: '100%' }} className='footer__form-email'>
                                <Form
                                    name="basic"
                                    labelCol={{ span: 0 }}
                                    wrapperCol={{ span: 16 }}
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Por favor ingrese su correo electronico!' }]}
                                    >
                                        <Input
                                            placeholder='Ingresa tu correo'
                                            suffix={<MailOutlined style={{ color: '#717171B2', fontSize: 32 }} />}
                                        />
                                    </Form.Item>

                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            ENVIAR
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <Row>
                            <Typography.Text className='footer__title-social'>Nuestra Redes</Typography.Text>
                        </Row>
                        <Row style={{ height: 2, backgroundColor: '#beb31e', marginBottom: 10, width: 200 }}>
                        </Row>
                        <Row>
                            <FacebookOutlined style={{ fontSize: 30, color: '#beb31e', marginRight: 15 }} />
                            <InstagramOutlined style={{ fontSize: 30, color: '#beb31e', marginRight: 15 }} />
                            <TwitterOutlined style={{ fontSize: 30, color: '#beb31e', marginRight: 15 }} />
                        </Row>
                    </Col>
                </Row>

                <Row style={{ height: 2, backgroundColor: '#beb31e', marginTop: 20, marginBottom: 20, marginRight: '5%', marginLeft: '5%' }} />

                <Row justify='center' style={{ paddingLeft: 10, paddingRight: 10 }} >
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Row>
                            <Typography.Text className='footer__title-inf'>INFORMACIÓN</Typography.Text>

                        </Row>
                        <Row style={{ height: 2, backgroundColor: '#beb31e', marginBottom: 10, width: 400 }} />
                        <Space direction='vertical' style={{ marginBottom: 20 }}>

                            <Row onClick={() => console.log('test')} style={{ cursor: 'pointer', marginBottom: 3 }}>
                                <Typography.Text className='footer__vignette'>o</Typography.Text>
                                <Typography.Text className='footer__text-inf'>
                                    Nosotros
                                </Typography.Text>
                            </Row>
                            <Row onClick={() => console.log('test')} style={{ cursor: 'pointer', marginBottom: 3 }}>
                                <Typography.Text className='footer__vignette'>o</Typography.Text>
                                <Typography.Text className='footer__text-inf'>
                                    Términos y condiciones
                                </Typography.Text>
                            </Row>
                            <Row onClick={() => console.log('test')} style={{ cursor: 'pointer', marginBottom: 3 }}>
                                <Typography.Text className='footer__vignette'>o</Typography.Text>
                                <Typography.Text className='footer__text-inf'>
                                    Seguridad y privacidad
                                </Typography.Text>
                            </Row>
                            <Row onClick={() => console.log('test')} style={{ cursor: 'pointer', marginBottom: 3 }}>
                                <Typography.Text className='footer__vignette'>o</Typography.Text>
                                <Typography.Text className='footer__text-inf'>
                                    Ayuda
                                </Typography.Text>
                            </Row>
                            <Row onClick={() => console.log('test')} style={{ cursor: 'pointer' }}>
                                <Typography.Text className='footer__vignette'>o</Typography.Text>
                                <Typography.Text className='footer__text-inf'>
                                    Defensa del consumidor
                                </Typography.Text>
                            </Row>
                        </Space>

                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Row>
                            <Typography.Text className='footer__title-inf'>CONTACTANOS</Typography.Text>

                        </Row>
                        <Row style={{ height: 2, backgroundColor: '#beb31e', marginBottom: 10, width: 400 }} />
                        <Space direction='vertical' style={{ marginBottom: 20 }}>
                            <Row onClick={() => console.log('test')} style={{ cursor: 'pointer' }}>
                                <EnvironmentOutlined className='footer__icon-inf' />
                                <Typography.Text className='footer__text-label'>
                                    Dirección:
                                </Typography.Text>
                                <Typography.Text className='footer__text-inf'>
                                    Buenos Aires 840, Córdoba Capital
                                </Typography.Text>
                            </Row>
                            <Row onClick={() => console.log('test')} style={{ cursor: 'pointer' }}>
                                <MailOutlined className='footer__icon-inf' />
                                <Typography.Text className='footer__text-label'>
                                    Email:
                                </Typography.Text>
                                <Typography.Text className='footer__text-inf' >
                                    agroinc@gmail.com
                                </Typography.Text>
                            </Row>
                            <Row onClick={() => console.log('test')} style={{ cursor: 'pointer' }}>
                                <PhoneOutlined className='footer__icon-inf' />
                                <Typography.Text className='footer__text-label'>
                                    Teléfono:
                                </Typography.Text>
                                <Typography.Text className='footer__text-inf'>
                                    +54 9  351 - 2120418
                                </Typography.Text>
                            </Row>
                        </Space>
                    </Col>
                </Row>
                <Row justify='center' align='middle' className='footer__copy-content'>
                    <Typography.Text className='footer__text-inf'>
                        Copyright © 2021 Agroinc. Todos los derechos reservados.
                    </Typography.Text>
                </Row>
                <Row style={{marginTop: 20}}/>
            </Footer>
        </div>
    );
};

export default FooterNav;