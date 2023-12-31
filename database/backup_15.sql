PGDMP     /                    {            postgres    15.1    15.1 !               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    5    postgres    DATABASE        CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Hungarian_Hungary.1250';
    DROP DATABASE postgres;
                postgres    false                        0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3359                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            !           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    24792 	   companies    TABLE     �  CREATE TABLE public.companies (
    company_id integer NOT NULL,
    company_name character varying(255),
    company_user_id integer,
    company_category character varying(255),
    company_location character varying(255),
    company_phone character varying(255),
    company_headquarters character varying(255),
    company_billing_address character varying(255),
    company_registration_number character varying(255),
    company_vat_number character varying(255),
    company_archived boolean,
    company_billing_name character varying(255),
    company_unit_name character varying(255),
    company_billing_zip character varying(255),
    company_billing_city character varying(255)
);
    DROP TABLE public.companies;
       public         heap    postgres    false            �            1259    24797    companies_id_seq    SEQUENCE     �   ALTER TABLE public.companies ALTER COLUMN company_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.companies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            �            1259    24798 	   documents    TABLE     �   CREATE TABLE public.documents (
    document_id integer NOT NULL,
    document_name character varying(255),
    document_user_id integer,
    document_company_id integer,
    document_title character varying(255)
);
    DROP TABLE public.documents;
       public         heap    postgres    false            �            1259    24803    documents_document_id_seq    SEQUENCE     �   ALTER TABLE public.documents ALTER COLUMN document_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.documents_document_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    24804    haccp    TABLE     �	  CREATE TABLE public.haccp (
    haccp_id integer NOT NULL,
    haccp_unit_name character varying(255),
    haccp_supply character varying(255),
    haccp_products_require_cold_storage character varying(255),
    haccp_require_keeping_warm boolean,
    haccp_preparatory character varying(255),
    haccp_storages character varying(255),
    haccp_refrigerator character varying(255),
    haccp_delivery boolean,
    haccp_delivery_method character varying(255),
    haccp_dressing_room boolean,
    haccp_cold_products boolean,
    haccp_egg character varying(255),
    haccp_glass_cleaner character varying(255),
    haccp_surface_disinfectant character varying(255),
    haccp_other_chemical character varying(255),
    haccp_hand_disinfectant character varying(255),
    haccp_2phase_dishwashing_detergent character varying(255),
    haccp_general_disinfectant character varying(255),
    haccp_scale_remover character varying(255),
    haccp_degreaser character varying(255),
    haccp_factory_dishwasher character varying,
    haccp_consumer_dishwasher character varying(255),
    haccp_disposable_consumer_container boolean,
    haccp_dish_washing_up character varying(255),
    haccp_have_haccp boolean,
    haccp_existing_haccp_date character varying(255),
    haccp_pest_control character varying(255),
    haccp_food_waste_transport character varying(255),
    haccp_municipal_waste_dispose character varying(255),
    haccp_entrances character varying(255),
    haccp_route_intersects boolean,
    haccp_place_of_receipt boolean,
    haccp_water_supply character varying(255),
    haccp_sewage_drain character varying(255),
    haccp_date character varying(255),
    haccp_user_id integer,
    haccp_company_id integer,
    haccp_require_keeping_cold boolean,
    haccp_ingredients character varying(255),
    haccp_company_category character varying,
    haccp_transaction_id character varying(255),
    payment_success boolean,
    haccp_user_email character varying(255),
    haccp_kitchen_location character varying(255),
    haccp_authority_signal character varying(255),
    haccp_company_headquarters character varying(255),
    haccp_billing_name character varying(255),
    haccp_billing_address character varying(255),
    haccp_company_vat_number character varying(255),
    haccp_company_name character varying(255),
    haccp_aszf_checked boolean,
    haccp_privacy_policy_checked boolean,
    haccp_otp_checked boolean,
    haccp_billing_zip character varying(255),
    haccp_billing_city character varying(255)
);
    DROP TABLE public.haccp;
       public         heap    postgres    false            �            1259    24809    haccp_haccp_id_seq    SEQUENCE     �   ALTER TABLE public.haccp ALTER COLUMN haccp_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.haccp_haccp_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219            �            1259    24810    users    TABLE     d  CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_name character varying(255),
    user_email character varying(255),
    user_phone character varying(255),
    user_role character varying(255),
    user_password character varying(255),
    user_archived boolean,
    user_reg_active boolean,
    user_new_pw_exp_date character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24815    users_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    221                      0    24792 	   companies 
   TABLE DATA           G  COPY public.companies (company_id, company_name, company_user_id, company_category, company_location, company_phone, company_headquarters, company_billing_address, company_registration_number, company_vat_number, company_archived, company_billing_name, company_unit_name, company_billing_zip, company_billing_city) FROM stdin;
    public          postgres    false    215   �6                 0    24798 	   documents 
   TABLE DATA           v   COPY public.documents (document_id, document_name, document_user_id, document_company_id, document_title) FROM stdin;
    public          postgres    false    217   �9                 0    24804    haccp 
   TABLE DATA           �  COPY public.haccp (haccp_id, haccp_unit_name, haccp_supply, haccp_products_require_cold_storage, haccp_require_keeping_warm, haccp_preparatory, haccp_storages, haccp_refrigerator, haccp_delivery, haccp_delivery_method, haccp_dressing_room, haccp_cold_products, haccp_egg, haccp_glass_cleaner, haccp_surface_disinfectant, haccp_other_chemical, haccp_hand_disinfectant, haccp_2phase_dishwashing_detergent, haccp_general_disinfectant, haccp_scale_remover, haccp_degreaser, haccp_factory_dishwasher, haccp_consumer_dishwasher, haccp_disposable_consumer_container, haccp_dish_washing_up, haccp_have_haccp, haccp_existing_haccp_date, haccp_pest_control, haccp_food_waste_transport, haccp_municipal_waste_dispose, haccp_entrances, haccp_route_intersects, haccp_place_of_receipt, haccp_water_supply, haccp_sewage_drain, haccp_date, haccp_user_id, haccp_company_id, haccp_require_keeping_cold, haccp_ingredients, haccp_company_category, haccp_transaction_id, payment_success, haccp_user_email, haccp_kitchen_location, haccp_authority_signal, haccp_company_headquarters, haccp_billing_name, haccp_billing_address, haccp_company_vat_number, haccp_company_name, haccp_aszf_checked, haccp_privacy_policy_checked, haccp_otp_checked, haccp_billing_zip, haccp_billing_city) FROM stdin;
    public          postgres    false    219   �:                 0    24810    users 
   TABLE DATA           �   COPY public.users (user_id, user_name, user_email, user_phone, user_role, user_password, user_archived, user_reg_active, user_new_pw_exp_date) FROM stdin;
    public          postgres    false    221   2@       "           0    0    companies_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.companies_id_seq', 101, true);
          public          postgres    false    216            #           0    0    documents_document_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.documents_document_id_seq', 15, true);
          public          postgres    false    218            $           0    0    haccp_haccp_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.haccp_haccp_id_seq', 182, true);
          public          postgres    false    220            %           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 46, true);
          public          postgres    false    222            v           2606    24817    companies companies_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (company_id);
 B   ALTER TABLE ONLY public.companies DROP CONSTRAINT companies_pkey;
       public            postgres    false    215            x           2606    24819    documents documents_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (document_id);
 B   ALTER TABLE ONLY public.documents DROP CONSTRAINT documents_pkey;
       public            postgres    false    217            z           2606    24821    haccp haccp_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.haccp
    ADD CONSTRAINT haccp_pkey PRIMARY KEY (haccp_id);
 :   ALTER TABLE ONLY public.haccp DROP CONSTRAINT haccp_pkey;
       public            postgres    false    219            |           2606    24823    users user_email 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_email UNIQUE (user_email);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT user_email;
       public            postgres    false    221            ~           2606    24825    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    221            �           2606    24826    documents company_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT company_fk FOREIGN KEY (document_company_id) REFERENCES public.companies(company_id) NOT VALID;
 >   ALTER TABLE ONLY public.documents DROP CONSTRAINT company_fk;
       public          postgres    false    215    217    3190            �           2606    24831    haccp haccp_company_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.haccp
    ADD CONSTRAINT haccp_company_id FOREIGN KEY (haccp_company_id) REFERENCES public.companies(company_id) NOT VALID;
 @   ALTER TABLE ONLY public.haccp DROP CONSTRAINT haccp_company_id;
       public          postgres    false    215    219    3190            �           2606    24836    haccp haccp_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.haccp
    ADD CONSTRAINT haccp_user_id FOREIGN KEY (haccp_user_id) REFERENCES public.users(user_id) NOT VALID;
 =   ALTER TABLE ONLY public.haccp DROP CONSTRAINT haccp_user_id;
       public          postgres    false    221    3198    219                       2606    24841    companies user_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT user_fk FOREIGN KEY (company_user_id) REFERENCES public.users(user_id) NOT VALID;
 ;   ALTER TABLE ONLY public.companies DROP CONSTRAINT user_fk;
       public          postgres    false    221    215    3198            �           2606    24846    documents user_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT user_fk FOREIGN KEY (document_user_id) REFERENCES public.users(user_id) NOT VALID;
 ;   ALTER TABLE ONLY public.documents DROP CONSTRAINT user_fk;
       public          postgres    false    221    3198    217               �  x��T�r�@=������G9�����[.MۙB)��p�8�̍����G��@p��f��u�7�0���l鎡��l�}��f�l1�&���㲮B��v����q'I�o<�*|��1R�o`�:�+o�Jv�D�Q�H�^�����=X�cAW�TY*���Z�3�F��r"�3x���{���x<�Cԍ{8�j�?l~�Y^����3�b?�eEI�]N�:	�����C�=��W���70��xMX)��h�Q���w��2����K]�gX�VE�0N����ex_[�<����2�;�m[����9�#�Q��)�<0��%�x�$�yU��
N��VF��C�u��l���
�\{��(�-D![�T�t�$��(��%���;v�i�0�+��	.W0j���	�b+?�p:�Ҕl�֊����F��N$�C�7�_?<����G��w�M# �H��� �9�;����N��Պ��3@���MGar%&�I�ĒR�����ȰY"	3r��\�U�����.�ڛ�	/�>Y��m,��	�-7�Ȓ������6D4��f�^�H��R~[҄)qb3�ܑ郜����&�m[�˽��r�;�g��MU�no� ����cx�<������ ������ֆ��6R�K�sy��t~_l�         U  x����J�0���S�	Ď?�҅ 
�t7�xi�f��f�7p�G�e.d������3:��������IƂ2�-���c�l�Ȟ�b�4Z$5n�\���\�?�N��&<�v{~Ŕ1�s�2��*���L�8X��î�{�2T��-�7T�-΄�|�Qu�v6�m�E1��8�F�amj{ߍ��Zxv�
�k�ZiI��w�;P0&�Ј?>�f�P�E-+�t�l�޷'Q<�j��̳3V:�&�J�A2oU�<��������#���QNM�P��[-_0qM�Z�:��q�E��`�@
�q���,�.X�
.�?"fئ�Ə0�SǑY�O8�߽%��         <  x���r�6���S�"�DS}��*�ǭ��vN��� T��E!ǜ{�U���U�Nғ;�A�L�0�]������8s�q���\}&_Z�ֿ���ZJ�Օ�E���W�Z�T�n%

�*2A4�� J�O�>�eU�r�Q�*�����xǷ��'������Kڻ�R.r�kS�#e>l.�0I�d��D���a�4گn_��09I��,C�*m��|8�m#�_�g4%�䋮P-�!_���\�d*n��r�u��>��� ߉��vF['/�p�O����c13��]�d����ȡo:�?�m�F��TF�-������e:U�k�^�BC���@�>k(H��rd����{Oi<}�T��Z�k���k}G�Jm��kl�9Ut�Z.��>�6Pd�խ�TȂǢ��Y0J\Z\WHG+���)�x�s��{I/^Ċ|��tߒ{g�
jq(˾_}��x�/�1T3'�! H��)�x6�����v~}3�};��S�F�t��ӻl�Y>Ȳ��ˉJ&ɰ��?�d��P�J����N�
�j�G�H�Ju+^��'��%�Z\�Vco���͚�8o=z�<�2A�p1JN��d�mP���U�m@`�A��-O�O����遧OO�Sv�����tz�����x�OyY:I'��w�����d#q�����u�� 6��P�m$����/�B���O���J�3R��A�<�z��R�����h��k�A��UCh��/��k�����P0�I�y��7Դ��;������K�$U��j�����*������^|RX��q)Un�����׌W�Ⱥ�,�:;b����10�~4�G�}׿���q:�7���Ӫ��9p������&?W�b�7\ErΊB�>�طN�l@KA��z�4���CK�A.�=s����;��o1/- 9�W��SޚH��k>v�!F�xJ�#!>8�E[���K^�!no�s��p��Ct��ש:6�
	i��7*@#�/�cW6&��m�y*n/1��(�H��8/��y6����;��)糜=N~|��t��ƽ�(�r�H��T�g<;@�˴�#����X<8�yhI?U+��Zm3`y(Oj�Z�%���c#�8��������iĹay���ښG�q'�m#BB�h|ܡ��G7j;?�`)�&|om�QpEηLD���IH�!�#42Q��da��vhj�Ww�n�><άc��H�y��Q�w� e/��nŶ�����������y���b��zC��x���qٛ��2zqA5-/�_��W0�\�SY���29�+�sY���CZ�8j��Ɋ-cG����'[            x�U�Mn�@��p�.�5�q�T���(�f,��|� �ަg��
ML��{y�_���Q�����j.j��0ƺN �'��C�v�U��Ŏҳ�{.3��n.��jِ�ӭ��e]���W�ܝ��[J)�Q���4Dk.��F�
�TӍ�&z���o�d�2���pN�0P����`�������fUu�u�9mk�̀j��zS7:4�����ʣ�B��B�`t�X���ϸ�k@]�g���v��;�J�]��"��*���?YQh��jl��4[YU팛�ݽ"I�w`i     